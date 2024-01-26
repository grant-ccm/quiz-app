<script setup lang="ts">
import Button from "primevue/button";
import { RouterLink } from "vue-router";

const props = defineProps<{
  score: number;
  totalCount: number;
}>();
const emits = defineEmits<{
  playAgain: [];
}>();
</script>

<template>
  <div>
    <h2>Results</h2>
    <p>
      You answered {{ props.score }}/{{ props.totalCount }} questions correctly
    </p>
    <div class="button-container">
      <RouterLink to="/">
        <Button>View High Scores</Button>
      </RouterLink>
      <Button @click="emits('playAgain')">Play Again</Button>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  gap: 10px;
}
</style>
