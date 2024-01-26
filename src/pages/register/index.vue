<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { helpers, maxLength, required } from "@vuelidate/validators";
import { setUserToStorage } from "../../helpers/user.ts";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import InfoCard from "../../components/InfoCard.vue";

const router = useRouter();

const formData = ref({
  name: "",
});
const rules = {
  name: {
    required: helpers.withMessage("Name is required", required),
    maxLength: helpers.withMessage(
      "Name cannot exceed 25 characters",
      maxLength(25)
    ),
  },
};

const validator = useVuelidate(rules, formData);

function submitForm() {
  validator.value.$touch();
  if (validator.value.$invalid) return;
  const newUser = { name: formData.value.name, highScores: [] };
  setUserToStorage(newUser);
  router.replace("/");
}
</script>

<template>
  <InfoCard>
    <template #header>Register</template>
    <template #default>
      <form @submit.prevent="submitForm">
        <div class="form-entry">
          <label>Name:</label>
          <div class="input-block">
            <InputText size="small" type="text" v-model.trim="formData.name" />
            <span class="error-text">{{
              validator?.name?.$errors[0]?.$message
            }}</span>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </template>
  </InfoCard>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.form-entry {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
}
label {
  font-weight: 500;
}
.input-block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.error-text {
  color: red;
  font-size: small;
}
</style>
