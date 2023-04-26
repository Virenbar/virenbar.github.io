<script setup lang="ts">
const props = defineProps<Props>();
const dirs = props.uri.replace(/\/[^/]*$/, "").split("/");

let path = "..";
const crumbs: Crumb[] = [];
for (let i = 0; i < dirs.length; i++) {
  path += dirs[i] + "/";
  crumbs.push({
    name: i == 0 ? "root" : decodeURIComponent(dirs[i]),
    url: path,
    active: i != dirs.length - 1
  });
}

interface Props { uri: string }
interface Crumb {
  name: string
  url: string
  active: boolean
}
</script>
<template>
  <span v-for="crumb in crumbs" :key="crumb.url">
    <template v-if="crumb.active">
      <NuxtLink :to="crumb.url">{{ crumb.name }}</NuxtLink><span>/</span>
    </template>
    <span v-else>{{ crumb.name }}/</span>
  </span>
</template>
