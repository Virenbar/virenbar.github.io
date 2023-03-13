<template>
  <div v-if="post" class="card">
    <div class="card-header d-flex justify-content-between">
      <h4>{{ post.title }}</h4>
      <span class="text-muted">
        {{ $formatISODate(post.date) }}
      </span>
    </div>
    <div class="card-body">
      <ContentRenderer :value="post" />
    </div>
    <div class="card-footer">
      <nav aria-label="Post navigation">
        <div class="d-flex justify-content-between">
          <PageButton title="Previous" :url="prev" />
          <PageButton title="Next" :url="next" />
        </div>
      </nav>
    </div>
  </div>
  <ErrorNotFound v-else />
</template>
<script setup lang="ts">
const { getPost, getPostSurround } = useDocument();
const post = await getPost();
const s = await getPostSurround();
const prev = s?.prev ? `..${s.prev._path}` : null;
const next = s?.next ? `..${s.next._path}` : null;
// setResponseStatus(404)
</script>
