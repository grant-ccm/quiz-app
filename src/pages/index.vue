<script setup lang="ts">
import { onMounted, ref } from "vue";
import { UserType } from "../types/user";
import { getUserFromStorage } from "../helpers/user";
import { useRouter } from "vue-router";
import Button from "primevue/button";
import HighScoreBoard from "../components/HighScoreBoard.vue";

const router = useRouter();

const user = ref<UserType | undefined>();

const startGame = () => {
  router.push("/play");
};

onMounted(() => {
  const localStorageRes = getUserFromStorage();
  if (localStorageRes) user.value = localStorageRes;
  else console.log("No user error");
});
</script>

<template>
  <div v-if="user">
    <h2>Welcome, {{ user.name }}</h2>
    <HighScoreBoard :scores="user.highScores" />
    <Button @click="startGame">Start</Button>
  </div>
</template>

<style scoped></style>
