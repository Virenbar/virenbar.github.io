<template>
  <div v-if="post" class="card">
    <div class="card-header d-flex justify-content-between">
      <h4>{{ post.title }}</h4>
      <span class="text-muted">{{ $formatISODate(post.date) }}</span>
    </div>
    <div class="card-body">
      <ContentRenderer :value="post" />
    </div>
    <!-- <div class="card-body">
      <ContentDoc v-slot="{ P }" :query="{ where: [{ _locale: locale }], path: path }">
        <ContentRenderer :value="P" />
      </ContentDoc>
    </div> -->
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
//const switchLocalePath = useSwitchLocalePath();
//const path = switchLocalePath("ru");
//const locale = useLocales().current;

const { getPost, getPostSurround } = useDocument();
const post = await getPost();

const { prev, next } = await getPostSurround();
const pathP = prev ? `..${prev._path}` : null;
const pathN = next ? `..${next._path}` : null;
</script>
