<template>
  <div class="counter">
    <h2>Count: {{ store.state.count }}</h2>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { store } from "../../store";

const increment = () => store.dispatch("incrementCounter");
const reset = () => store.dispatch("resetCounter");
</script>
