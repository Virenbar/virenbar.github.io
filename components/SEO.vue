<script setup lang="ts">
//const d = useRoute()
//const seo_title = 
const og_type = "website"
</script>
<template>
    <div>

        <Head>
            <Meta property="og:type" :content="og_type" />
        </Head>
    </div>
</template>
