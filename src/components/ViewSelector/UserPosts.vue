<template>
  <div data-testid="user-posts">
    <h2>User Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const posts = [
  { id: 1, title: "Vue 3 Composition API", body: "Learn how the Composition API improves flexibility." },
  { id: 2, title: "Reactivity in Vue", body: "Explore how Vue handles reactivity under the hood." },
  { id: 3, title: "Vue Router Basics", body: "A guide to navigating pages in your Vue app." },
];
</script>
