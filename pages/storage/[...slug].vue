<script setup lang="ts">
definePageMeta({
  layout: "mini"
});
const { path, items } = useStorage();
</script>
<template>
  <div>
    <Title>Storage</Title>
    <Breadcrumbs :uri="path" />
    <DirectoryListing v-if="items" :items="items" />
    <ErrorNotFound v-else />
  </div>
</template>
