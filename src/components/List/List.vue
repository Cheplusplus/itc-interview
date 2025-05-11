<template>
  <div class="user-list">
    <input type="text" v-model="searchQuery" placeholder="Search by name..." class="search-input" />

    <ul>
      <li v-for="user in filteredUsers" :key="user.name">{{ user.name }} ({{ user.age }})</li>
    </ul>

    <p v-if="filteredUsers.length === 0">No users found.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface User {
  name: string;
  age: number;
}

const users = ref<User[]>([
  { name: "Alice", age: 28 },
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 22 },
  { name: "Diana", age: 30 },
]);

const searchQuery = ref("");

const filteredUsers = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return users.value.filter((user) => user.name.toLowerCase().includes(query));
});
</script>
