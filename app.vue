<script setup lang="ts">
useFocusReset();
const { current } = useLocales();
const locale = computed(() => ({
  ru: "ru_RU",
  en: "en_US",
  eo: "eo"
})[current.value] || current.value);

useHead({
  titleTemplate: (titleChunk: unknown) => { return titleChunk ? `${titleChunk} - @Virenbar` : "@Virenbar"; }
});
useSeoMeta({
  ogSiteName: "@Virenbar",
  ogType: "website",
  description: "The personal website of Virenbar, a .NET and TS developer living and working in Ural, Yekaterinburg.",
  ogLocale: locale,
  ogUrl: computed(() => useRoute().path)
});
</script>
<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <div class="scanlines" />
      <div class="scanline" />
      <div class="container p-3">
        <NuxtPage />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
