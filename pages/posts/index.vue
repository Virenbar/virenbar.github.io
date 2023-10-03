<script setup lang="ts">
const localePath = useLocalePath();
const { getPosts } = useVContent();
const posts = await getPosts();
</script>
<template>
  <div>
    <Title>{{ $t("page.blog") }}</Title>
    <h3>{{ $t("blog.title") }}</h3>
    <ul>
      <template v-for="post in posts" :key="post.id">
        <li>
          <h4>
            <NuxtLink :to="localePath(post._path!)">
              {{ post.title }}
            </NuxtLink>
          </h4>
          <ContentRenderer :value="post" :excerpt="true" />
        </li>
      </template>
    </ul>
  </div>
</template>
