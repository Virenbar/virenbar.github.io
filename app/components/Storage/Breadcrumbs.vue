<script setup lang="ts">
const props = defineProps<Props>();
interface Props { uri: string }

const breadcrumbs = computed(() => {
  const dirs = props.uri.replace(/\/[^/]*$/, "").split("/");

  let path = "";
  const crumbs: Crumb[] = [];
  for (let i = 0; i < dirs.length; i++) {
    path += dirs[i] + "/";
    crumbs.push({
      name: i == 0 ? "root" : decodeURIComponent(dirs[i]),
      url: path,
      active: i != dirs.length - 1,
    });
  }
  return crumbs;
});
</script>
<template>
  <span v-for="crumb in breadcrumbs" :key="crumb.url">
    <template v-if="crumb.active">
      <a :href="`#${crumb.url}`">{{ crumb.name }}</a><span>/</span>
    </template>
    <span v-else>{{ crumb.name }}/</span>
  </span>
</template>
