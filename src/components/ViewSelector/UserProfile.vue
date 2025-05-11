<template>
  <div data-testid="user-profile" class="profile">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>

<script setup lang="ts">
const user = {
  name: "Che Overmeyer",
  email: "cheovermeyer@gmail.com",
};
</script>
