<template>
  <NuxtLink v-if="props.url" class="btn btn-primary" :to="props.url">
    {{ props.title }}
  </NuxtLink>
  <NuxtLink v-else aria-disabled="true" class="btn btn-primary disabled" tabindex="-1">
    {{ props.title }}
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  title: string
  url?: string | null
}
</script>
