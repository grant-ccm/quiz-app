<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  userChose: boolean;
  isCorrect: boolean;
  text: string;
}>();

const colorClass = computed(() =>
  !props.userChose ? "unselected" : props.isCorrect ? "correct" : "incorrect"
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
  background-color: rgb(245, 160, 245);
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.2s ease-in;
}
.unselected {
  cursor: pointer;
}
.unselected:hover {
  background-color: rgb(243, 143, 243);
  box-shadow: 1px 1px 1px rgba(129, 129, 129, 0.5);
}
.correct {
  background-color: rgb(137, 240, 137);
}
.incorrect {
  background-color: rgb(247, 128, 128);
}
</style>
