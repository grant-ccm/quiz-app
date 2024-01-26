<script setup lang="ts">
import { ref } from "vue";
import {
  Category,
  Difficulty,
  GameStates,
  Question,
  QuestionConfigOptions,
} from "../../types/game";
import StartScreen from "../../components/game/StartScreen.vue";
import PlayingScreen from "../../components/game/PlayingScreen.vue";
import EndScreen from "../../components/game/EndScreen.vue";
import { getQuestions } from "../../api/quiz";
import { updateUserScores } from "../../helpers/user";

const status = ref(GameStates.Start);
const questions = ref<Question[]>([]);
const score = ref(0);

const startGame = async (
  limit: number,
  categories: Category[],
  difficulty: Difficulty | ""
) => {
  const options: QuestionConfigOptions = {};
  if (categories.length > 0) options.categories = categories;
  if (difficulty) options.difficulty = difficulty;

  const response = await getQuestions(limit, options);
  if (response) {
    questions.value = response;
    status.value = GameStates.Playing;
  }
};

const viewResults = (newScore: number) => {
  score.value = newScore;
  updateUserScores(newScore);
  status.value = GameStates.End;
};

const playAgain = () => {
  questions.value = [];
  score.value = 0;
  status.value = GameStates.Start;
};
</script>

<template>
  <StartScreen
    v-if="status === GameStates.Start"
    @handleStartGame="startGame"
  />
  <PlayingScreen
    v-else-if="status === GameStates.Playing"
    :questions="questions"
    @viewResults="viewResults"
  />
  <EndScreen
    v-else
    :score="score"
    :total-count="questions.length"
    @playAgain="playAgain"
  />
</template>
