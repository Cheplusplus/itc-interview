<template>
  <button id="profile-btn" @click="currentView = 'UserProfile'">Profile</button>
  <button id="settings-btn" @click="currentView = 'UserSettings'">Settings</button>
  <button id="posts-btn" @click="currentView = 'UserPosts'">Posts</button>
  <component class="component" :is="currentComponent"></component>
</template>

<script setup lang="ts">
import { ref, computed, type Component } from "vue";

import UserProfile from "./UserProfile.vue";
import UserSettings from "./UserSettings.vue";
import UserPosts from "./UserPosts.vue";

const currentView = ref("UserProfile");

const components: Record<string, Component> = {
  UserProfile,
  UserSettings,
  UserPosts,
};

const currentComponent = computed<Component>(() => components[currentView.value]);
</script>
