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
})[current.value] || "ru_RU");

useHead({
  titleTemplate: (titleChunk: unknown) => { return titleChunk ? `${titleChunk} - @Virenbar` : "@Virenbar"; },
  script: [
    {
      src: "https://kit.fontawesome.com/3d652cc361.js",
      crossorigin: "anonymous"
    }
  ]
});
useSeoMeta({
  ogSiteName: "@Virenbar",
  ogType: "website",
  ogTitle: "",
  description: "The personal website of Virenbar, a .NET and TS developer living and working in Ural, Yekaterinburg.",
  ogLocale: locale,
  ogUrl: computed(() => route.path)
});
/*
      <Meta property="og:locale" content="{{ site.locale | replace: " -", "_" | default: "en_US" }}" />
      <Meta property="og:url" content="{{ canonical_url }}" />
*/
</script>
