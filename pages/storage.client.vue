<script setup lang="ts">
const { pending, storage } = useStorage();
</script>
<template>
  <div>
    <Title>Storage</Title>
    <span v-for="crumb in storage.breadcrumbs" :key="crumb.name">
      <template v-if="crumb.active">
        <NuxtLink :to="`${crumb.url}`">{{ crumb.name }}</NuxtLink><span>/</span>
      </template>
      <span v-else>{{ crumb.name }}/</span>
    </span>
    <!-- <Breadcrumbs :uri="path" /> -->
    <StorageListing v-if="storage.items.length || pending" :items="storage.items" />
    <ErrorNotFound v-else />
  </div>
</template>
