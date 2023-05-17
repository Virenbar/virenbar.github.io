<script setup lang="ts">
const { path, items } = useStorage();

const breadcrumbs = computed(() => {
  const dirs = path.value.replace(/\/[^/]*$/, "").split("/");
  console.log(dirs);
  let pp = "";
  const crumbs: Crumb[] = [];
  for (let i = 0; i < dirs.length; i++) {
    pp += dirs[i] + "/";
    crumbs.push({
      name: i == 0 ? "root" : decodeURIComponent(dirs[i]),
      url: `?path=${pp}`,
      active: i != dirs.length - 1
    });
  }
  return crumbs;
});
</script>
<template>
  <div>
    <Title>Storage</Title>
    <span v-for="crumb in breadcrumbs" :key="crumb.name">
      <template v-if="crumb.active">
        <NuxtLink :to="`${crumb.url}`">{{ crumb.name }}</NuxtLink><span>/</span>
      </template>
      <span v-else>{{ crumb.name }}/</span>
    </span>
    <!-- <Breadcrumbs :uri="path" /> -->
    <StorageListing v-if="items.length" :items="items" />
    <ErrorNotFound v-else />
  </div>
</template>

