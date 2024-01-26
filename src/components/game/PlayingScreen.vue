<script setup lang="ts">
import { ref } from "vue";
import { Question } from "../../types/game";
import QuestionBall from "./QuestionBall.vue";
import QuestionPrompt from "./QuestionPrompt.vue";
import Button from "primevue/button";

const props = defineProps<{
  questions: Question[];
}>();
const emits = defineEmits<{
  viewResults: [newScore: number];
}>();

type GameState = {
  currentIndex: number;
  score: number;
  hasSelected: boolean;
};

const gameState = ref<GameState>({
  currentIndex: 0,
  score: 0,
  hasSelected: false,
});

const makeSelection = (isCorrect: boolean) => {
  if (isCorrect) gameState.value.score++;
  gameState.value.hasSelected = true;
};
const handleNextClick = () => {
  gameState.value.hasSelected = false;
  gameState.value.currentIndex++;
};
const handleViewResults = () => {
  emits("viewResults", gameState.value.score);
};
</script>

<template>
  <div class="container">
    <div class="ball-container">
      <QuestionBall
        v-for="(question, idx) in props.questions"
        :key="question.id"
        :playerIndex="gameState.currentIndex"
        :thisIndex="idx"
      />
    </div>
    <div class="prompt-container">
      <QuestionPrompt
        :question="questions[gameState.currentIndex]"
        :userChose="gameState.hasSelected"
        @selectAnswer="makeSelection"
      />
    </div>
    <div v-if="gameState.hasSelected" class="button-container">
      <Button
        v-if="gameState.currentIndex + 1 < props.questions.length"
        @click="handleNextClick"
        >Next Question</Button
      >
      <Button v-else @click="handleViewResults">View Results</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ball-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 20px;
}
.prompt-container {
  margin-top: 10px;
}
.button-container {
  margin-top: 20px;
}
</style>
