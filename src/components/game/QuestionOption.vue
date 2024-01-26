<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  userChose: boolean;
  isCorrect: boolean;
  text: string;
}>();

const colorClass = computed(() =>
  !props.userChose ? "" : props.isCorrect ? "correct" : "incorrect"
);
</script>

<template>
  <div :class="colorClass">{{ props.text }}</div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 40%;
  padding: 30px;
  background-color: rgb(230, 111, 230);
  border-radius: 10px;
  cursor: pointer;
}
.correct {
  background-color: rgb(56, 192, 56);
}
.incorrect {
  background-color: rgb(240, 54, 54);
}
</style>
