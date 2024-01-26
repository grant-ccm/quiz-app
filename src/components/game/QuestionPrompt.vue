<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Question } from "../../types/game";
import { shuffle } from "lodash";
import QuestionOption from "./QuestionOption.vue";
import ProgressBar from "primevue/progressbar";

const props = defineProps<{
  question: Question;
  userChose: boolean;
}>();

const emits = defineEmits<{
  selectAnswer: [isCorrect: boolean];
}>();

const timer = ref(0);
const interval = ref();

const shuffledOptions = computed(() =>
  shuffle([
    { text: props.question.correctAnswer, isCorrect: true },
    ...props.question.incorrectAnswers.map((q) => ({
      text: q,
      isCorrect: false,
    })),
  ])
);

const handleUserClick = (isCorrect: boolean) => {
  if (!props.userChose) {
    clearInterval(interval.value);
    emits("selectAnswer", isCorrect);
  }
};

onMounted(() => {
  interval.value = setInterval(() => {
    if (timer.value >= 10) {
      handleUserClick(false);
    }
    timer.value++;
  }, 1000);
});
</script>

<template>
  <div class="container">
    <h2>{{ props.question.question.text }}</h2>
    <ProgressBar
      :style="{ 'max-width': '500px', width: '100%' }"
      :show-value="false"
      :value="timer * 10"
    ></ProgressBar>
    <div class="options-container">
      <QuestionOption
        v-for="answer in shuffledOptions"
        :key="answer.text"
        :text="answer.text"
        :is-correct="answer.isCorrect"
        :user-chose="props.userChose"
        @click="handleUserClick(answer.isCorrect)"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
h2 {
  margin-bottom: 0px;
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
