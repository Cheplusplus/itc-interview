<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/"><button>ViewSelector</button></RouterLink>
    <RouterLink to="/list"><button>List</button></RouterLink>
    <RouterLink to="/counter"><button>Counter</button></RouterLink>
    <RouterLink to="/form"><button>Form</button></RouterLink>
  </div>
  <RouterView />
</template>
