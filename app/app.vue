<script setup lang="ts">
const { t } = useI18n();
const title = "@Virenbar";
const description = t("description");
const logo = "/favicon/android-chrome-192x192.png";
const { current_code } = useLocales();

useHead({
  titleTemplate: chunk => (chunk ? `${chunk} - ` : "") + title,
  meta: [{ name: "description", content: description }],
  htmlAttrs: { lang: current_code },
});
useSeoMeta({
  ogDescription: description,
  ogImage: logo,
  ogImageSecureUrl: logo,
  ogLocale: current_code,
  ogSiteName: title,
  ogTitle: title,
  ogType: "website",
  twitterCard: "summary",
  twitterDescription: description,
  twitterImage: logo,
  twitterTitle: title,
});
useFocusReset();
</script>
<template>
  <PageFavicon />
  <PageCRT />
  <div class="min-vh-100 d-flex flex-column">
    <PageHeader />
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <div class="container p-3">
        <NuxtPage />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
<style lang="scss">
@use "~/assets/css/styles.scss";
</style>
