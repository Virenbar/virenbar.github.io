<script setup lang="ts">
defineProps<Props>();
interface Props {
  title: string
  url?: string | null
}
</script>
<template>
  <NuxtLink v-if="url" class="btn btn-primary" :to="url">
    {{ title }}
  </NuxtLink>
  <NuxtLink v-else aria-disabled="true" class="btn btn-primary disabled" tabindex="-1">
    {{ title }}
  </NuxtLink>
</template>
