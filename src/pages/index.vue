<script setup lang="ts">
import { onMounted, ref } from "vue";
import { UserType } from "../types/user";
import { getUserFromStorage } from "../helpers/user";
import { useRouter } from "vue-router";
import Button from "primevue/button";
import HighScoreBoard from "../components/HighScoreBoard.vue";
import InfoCard from "../components/InfoCard.vue";

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
  <InfoCard v-if="user">
    <template #header> Welcome, {{ user.name }} </template>
    <template #default>
      <div class="body">
        <HighScoreBoard
          v-if="user.highScores.length"
          :scores="user.highScores"
        />
        <h4 v-else>
          No high scores yet...
          <br />
          Try playing a game!
        </h4>
        <Button @click="startGame">Start</Button>
      </div>
    </template>
  </InfoCard>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
