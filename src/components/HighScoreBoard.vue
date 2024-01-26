<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { computed } from "vue";
const props = defineProps<{
  scores: number[];
}>();

const formattedScores = computed(() =>
  props.scores.map((score) => ({ score: score }))
);
</script>

<template>
  <div class="container">
    <DataTable :value="formattedScores" striped-rows>
      <Column field="score" header="High Scores" />
    </DataTable>
  </div>
</template>

<style scoped>
.container {
  margin: 20px 0px;
}
</style>
