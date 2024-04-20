<script setup lang="ts">
const props = defineProps<Props>();

interface Props {
  title?: string,
  body?: string
}
</script>
<template>
  <div class="text-center">
    <div class="glitch-wrapper">
      <h1 class="glitch" data="404">
        404
      </h1>
    </div>
    <p><strong>{{ props.title ?? $t("error.page-not-found.title") }} :(</strong></p>
    <p>{{ props.body ?? $t("error.page-not-found.body") }}.</p>
  </div>
</template>
