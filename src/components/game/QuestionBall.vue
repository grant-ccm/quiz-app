<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  playerIndex: number;
  thisIndex: number;
}>();

const colorClass = computed(() =>
  props.thisIndex < props.playerIndex
    ? "past"
    : props.thisIndex === props.playerIndex
    ? "present"
    : "future"
);
</script>

<template>
  <div :class="colorClass">{{ props.thisIndex + 1 }}</div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.past {
  background-color: rgb(139, 0, 139);
}
.present {
  background-color: rgb(209, 57, 209);
}
.future {
  background-color: rgb(233, 136, 233);
}
</style>
