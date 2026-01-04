<script setup lang="ts">
const { t } = useI18n();
const title = t("page.status");
useHead({
  script: [{ src: "https://stttc.b-cdn.net/iframeResizer/iframeResizer.min.js", type: "text/javascript" }],
});
useSeoMeta({
  title: title,
  description: "Status of hardware",
});
</script>
<template>
  <div>
    <h3>{{ title }}</h3>
    <iframe
      class="htframe" src="https://wl.hetrixtools.com/r/fb1f9f0d69928c847a25c77610824d31/" width="100%" scrolling="no" style="border:none;"
      sandbox="allow-scripts allow-same-origin allow-popups" onload="iFrameResize([{log:false}],'.htframe')" />
  </div>
</template>
