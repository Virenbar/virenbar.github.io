<template>
  <div v-if="post" class="card">
    <div class="card-header d-flex justify-content-between">
      <h4>{{ post.title }}</h4>
      <span class="text-muted">{{ $formatISODate(post.date) }}</span>
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
<script setup lang="ts">
import { Nullable, Post } from "~~/types";
let post: Nullable<Post>;
let pathP: Nullable<string>;
let pathN: Nullable<string>;

const { getPost, getPostSurround } = useDocument();
try {
  post = await getPost();
  useContentHead(post);

  const { prev, next } = await getPostSurround();
  pathP = prev ? `..${prev._path}` : null;
  pathN = next ? `..${next._path}` : null;

} catch (error) {
  console.log(error);
}
</script>
