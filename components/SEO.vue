<script setup lang="ts">
// const d = useRoute()
// const seo_title =
const OGType = 'website'
</script>
<template>
  <div>

    <Head>
      <Meta property="og:type" :content="OGType" />
    </Head>
  </div>
</template>
