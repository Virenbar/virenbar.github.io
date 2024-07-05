// https://code.luasoftware.com/tutorials/nuxtjs/nuxt-v3-content-markdown-open-in-new-tab
<script setup>
const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  blank: {
    type: Boolean,
    default: false,
  },
});

function isHttpUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === "http:" || url.protocol === "https:";
  }
  catch {
    return false;
  }
}
</script>
<template>
  <NuxtLink :to="props.href" :target="isHttpUrl(props.href) ? '_blank' : '_self'">
    <slot />
  </NuxtLink>
</template>
