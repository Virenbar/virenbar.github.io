<script setup lang="ts">
const { getPost } = useVContent();
const { post, prev, next } = await getPost()
const route = useRoute()
console.log(route.params.slug)

useSeoMeta({
  title: post?.title,
  description: post?.description
})

const pathP = prev ? `..${prev.path}` : null;
const pathN = next ? `..${next.path}` : null;
</script>
<template>
  <div v-if="post" class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h4>{{ post.title }}</h4>
      <span class="text-body-secondary">{{ formatISODate(post.date) }}</span>
    </div>
    <div class="card-body">
      <ContentRenderer :value="post" />
    </div>
    <div class="card-footer">
      <nav aria-label="Post navigation">
        <div class="d-flex justify-content-between">
          <PageButton :title="$t('button.prev')" :url="pathP" />
          <PageButton :title="$t('button.next')" :url="pathN" />
        </div>
      </nav>
    </div>
  </div>
  <ErrorNotFound v-else />
</template>
