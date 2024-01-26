<script setup lang="ts">
import { computed, onMounted } from "vue";
import { Question } from "../../types/game";
import { shuffle } from "lodash";
import QuestionOption from "./QuestionOption.vue";

const props = defineProps<{
  question: Question;
  userChose: boolean;
}>();

const emits = defineEmits<{
  selectAnswer: [isCorrect: boolean];
}>();

const shuffledOptions = computed(() =>
  shuffle([
    { text: props.question.correctAnswer, isCorrect: true },
    ...props.question.incorrectAnswers.map((q) => ({
      text: q,
      isCorrect: false,
    })),
  ])
);

onMounted(() => {
  // setTimeout(() => {
  //   console.log("times up");
  // }, 5000);
});
</script>

<template>
  <h2>{{ props.question.question.text }}</h2>
  <!-- <div>Timer...</div> -->
  <div class="options-container">
    <QuestionOption
      v-for="answer in shuffledOptions"
      :key="answer.text"
      :text="answer.text"
      :is-correct="answer.isCorrect"
      :user-chose="props.userChose"
      @click="emits('selectAnswer', answer.isCorrect)"
    />
  </div>
</template>

<style scoped>
.options-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
