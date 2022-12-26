<template>
  <span class="sr-only">{{ props.text }}</span>
  <span aria-hidden="true" class="gradient gradient-green">
    <span v-for="char in props.text" :key="char">{{ char }}</span>
  </span>
</template>
<script setup lang="ts">
const props = defineProps<Props>();
interface Props { text: string }
</script>
