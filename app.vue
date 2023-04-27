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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
