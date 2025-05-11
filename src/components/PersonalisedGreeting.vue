<template>
  <p data-test="greeting">Hello, {{ name }}!</p>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
