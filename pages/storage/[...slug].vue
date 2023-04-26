<script setup lang="ts">
const { path, getItems } = useStorage();
const items = await getItems();
</script>
<template>
  <div>
    <Title>Storage</Title>
    <Breadcrumbs :uri="path" />
    <DirectoryListing v-if="items" :items="items" />
    <ErrorNotFound v-else />
  </div>
</template>
