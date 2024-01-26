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
  <div :class="colorClass">{{ props.thisIndex }}</div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.past {
  background-color: rgb(69, 0, 69);
}
.present {
  background-color: rgb(170, 44, 170);
}
.future {
  background-color: rgb(220, 122, 220);
}
</style>
