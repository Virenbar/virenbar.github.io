<script setup lang="ts">
const props = defineProps<Props>();
definePageMeta({
  layout: false
});

const statusCode = computed(() => "statusCode" in props.error ? props.error.statusCode : undefined);

interface Props {
  error: Object
}
</script>
<template>
  <PageFavicon />
  <NuxtLayout name="mini">
    <ErrorNotFound v-if="statusCode == 404" />
    <ErrorCommon v-else :error="props.error" />
  </NuxtLayout>
</template>
