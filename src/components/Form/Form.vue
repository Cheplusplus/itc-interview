<template>
  <form @submit.prevent="handleSubmit" novalidate>
    <div class="form-group">
      <label>Name</label>
      <input v-model="name" type="text" />
      <span v-if="errors.name">{{ errors.name }}</span>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="email" />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" />
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");

const errors = ref<{ name?: string; email?: string; password?: string }>({});

//The validations
const nameProvided = computed(() => name.value !== "");
const emailProvided = computed(() => email.value !== "");
const emailValid = computed(() => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // I got this from the vue docs
  return regex.test(email.value);
});
const passwordProvided = computed(() => password.value !== "");
const passwordAtLeast6Chars = computed(() => password.value.length >= 6);

const handleSubmit = () => {
  errors.value = {};

  if (!nameProvided.value) {
    errors.value.name = "Name is required";
  }

  if (!emailProvided.value) {
    errors.value.email = "Email is required";
  } else if (!emailValid.value) {
    errors.value.email = "Email is not valid";
  }

  if (!passwordProvided.value) {
    errors.value.password = "Password is required";
  } else if (!passwordAtLeast6Chars.value) {
    errors.value.password = "Password must be at least 6 characters";
  }

  if (Object.keys(errors.value).length === 0) {
    alert("Form submitted successfully!");
  }
};
</script>
