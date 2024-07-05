<script setup lang="ts">
defineProps<Props>();
interface Props {
  error: object
}
const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <h3>Error</h3>
  <div>
    <ul>
      <li v-for="(value, key) in error" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
  <button class="btn btn-warning" @click="handleError">
    Clear errors
  </button>
</template>
