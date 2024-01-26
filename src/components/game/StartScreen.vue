<script setup lang="ts">
import { ref } from "vue";
import { type Category, type Difficulty } from "../../types/game";
import MultiSelect from "primevue/multiselect";
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
import Slider from "primevue/slider";

type FormData = {
  limit: number;
  categories: Category[];
  difficulty: Difficulty | "";
};

const emits = defineEmits<{
  handleStartGame: [
    limit: number,
    categories: Category[],
    difficulty: Difficulty | ""
  ];
}>();

const categoryMapping: Array<{ key: Category; name: string }> = [
  { key: "arts_and_literature", name: "Arts & Literature" },
  { key: "film_and_tv", name: "Film & TV" },
  { key: "food_and_drink", name: "Food & Drink" },
  { key: "general_knowledge", name: "General Knowledge" },
  { key: "geography", name: "Geography" },
  { key: "history", name: "History" },
  { key: "music", name: "Music" },
  { key: "science", name: "Science" },
  { key: "society_and_culture", name: "Society & Culture" },
  { key: "sport_and_leisure", name: "Sports & Leisure" },
];
const difficultyMapping: Array<{ key: Difficulty; name: string }> = [
  { key: "easy", name: "Easy" },
  { key: "medium", name: "Medium" },
  { key: "hard", name: "Hard" },
];

const formData = ref<FormData>({
  limit: 5,
  categories: [],
  difficulty: "",
});

const submitForm = () => {
  emits(
    "handleStartGame",
    formData.value.limit,
    formData.value.categories,
    formData.value.difficulty
  );
};
</script>

<template>
  <div>
    <h2>Customize Your Trivia</h2>
    <form @submit.prevent="submitForm">
      <div class="form-entry">
        <label for="limit">Number of Questions: {{ formData.limit }}</label>
        <Slider :min="1" :max="50" v-model="formData.limit" />
      </div>
      <div class="form-entry">
        <label for="categories">Categories:</label>
        <MultiSelect
          class="multiselector"
          v-model="formData.categories"
          :max-selected-labels="2"
          display="chip"
          :options="categoryMapping"
          optionLabel="name"
          optionValue="key"
          placeholder="Select your Categories"
        />
      </div>
      <div class="form-entry">
        <label for="categories">Difficulty:</label>
        <SelectButton
          v-model="formData.difficulty"
          :options="difficultyMapping"
          optionLabel="name"
          optionValue="key"
          aria-labelledby="basic"
        />
      </div>
      <Button class="submit-button" type="submit">Start Game</Button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 500px;
}
.form-entry {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;
}
label {
  font-weight: 600;
}
.submit-button {
  align-self: center;
}
</style>
