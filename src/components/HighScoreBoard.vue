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
  <div>
    <DataTable :value="formattedScores" striped-rows style="width: fit-content">
      <Column
        style="display: flex; justify-content: center"
        field="score"
        header="High Scores"
      />
    </DataTable>
  </div>
</template>
