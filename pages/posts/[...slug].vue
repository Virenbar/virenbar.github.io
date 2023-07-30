<script setup lang="ts">
const { getPost, getPostSurround } = useDocument();

const post = await getPost();
useContentHead(post);

const { prev, next } = await getPostSurround();
const pathP = prev ? `..${prev._path}` : null;
const pathN = next ? `..${next._path}` : null;
</script>
<template>
  <div v-if="post" class="card">
    <div class="card-header d-flex justify-content-between">
      <h4>{{ post.title }}</h4>
      <span class="text-muted">{{ formatISODate(post.date) }}</span>
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
