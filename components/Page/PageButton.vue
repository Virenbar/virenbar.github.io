<template>
  <NuxtLink v-if="props.url" class="btn bg-info" :to="props.url">
    {{ props.title }}
  </NuxtLink>
  <NuxtLink v-else aria-disabled="true" class="btn bg-info disabled" tabindex="-1">
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
