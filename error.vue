<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <div class="scanlines" />
      <div class="container p-3">
        <h3>Error</h3>
        <div>
          <ul>
            <li v-for="(value, key) in props.error" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
        <button class="btn btn-warning" @click="handleError">
          Clear errors
        </button>
      </div>
    </main>
    <PageFooter />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<Props>();
const handleError = () => clearError({ redirect: "/" });

interface Props {
  error: Object
}
</script>
