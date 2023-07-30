<script setup lang="ts">
useHead({
  script: [{ src: "https://cdn.jsdelivr.net/gh/davidjbradshaw/iframe-resizer@master/js/iframeResizer.min.js", type: "text/javascript" }]
});
useSeoMeta({
  description: "Status of hardware"
});
const { t } = useI18n();
const title = t("page.status");
</script>
<template>
  <div>
    <Title>{{ title }}</Title>
    <h3>{{ title }}</h3>
    <iframe class="htframe" onload="iFrameResize([{log:false}],'.htframe')" sandbox="allow-scripts allow-same-origin allow-popups" scrolling="no" src="https://wl.hetrixtools.com/r/fb1f9f0d69928c847a25c77610824d31/" style="border:none;" width="100%" />
  </div>
</template>
