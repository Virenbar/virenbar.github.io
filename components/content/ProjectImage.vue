<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  src: string
  text?: string
}
const src = "/images/projects/" + props.src;
</script>
<template>
  <figure class="figure m-1">
    <NuxtLink :to="src" target="_blank">
      <img class="figure-img img-fluid rounded" :src="src" :alt="text">
    </NuxtLink>
    <figcaption v-if="text" class="figure-caption">
      {{ text }}
    </figcaption>
  </figure>
</template>
<style scoped>
img {
  max-height: 800px;
}

figure:hover {
  position: relative;
  z-index: 1000;
}

figcaption {
  text-align: center;
}
</style>
