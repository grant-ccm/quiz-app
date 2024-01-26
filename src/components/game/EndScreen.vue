<script setup lang="ts">
import Button from "primevue/button";
import { RouterLink } from "vue-router";
import InfoCard from "../InfoCard.vue";

const props = defineProps<{
  score: number;
  totalCount: number;
}>();
const emits = defineEmits<{
  playAgain: [];
}>();
</script>

<template>
  <InfoCard>
    <template #header> Results </template>
    <template #default>
      <p>
        You answered {{ props.score }}/{{ props.totalCount }} questions
        correctly
      </p>
      <div class="button-container">
        <RouterLink to="/">
          <Button>View High Scores</Button>
        </RouterLink>
        <Button @click="emits('playAgain')">Play Again</Button>
      </div>
    </template>
  </InfoCard>
</template>

<style scoped>
.button-container {
  display: flex;
  gap: 10px;
}
</style>
