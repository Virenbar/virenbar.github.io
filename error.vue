<script setup lang="ts">
const props = defineProps<Props>();
const statusCode = computed(() => "statusCode" in props.error ? props.error.statusCode : undefined);

interface Props {
  error: object
}
</script>
<template>
  <PageFavicon />
  <PageCRT />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <div class="container p-3">
        <ErrorNotFound v-if="statusCode == 404" />
        <ErrorCommon v-else :error="props.error" />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
