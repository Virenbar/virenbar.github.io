<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <Main />
    <PageFooter />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
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
  ogUrl: computed(() => route.path)
});
</script>
