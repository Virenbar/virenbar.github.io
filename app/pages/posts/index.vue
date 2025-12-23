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
          <h5>
            <NuxtLink :to="localePath(post.path)">
              {{ formatDate(new Date(post.date)) }} - {{ post.title }}
            </NuxtLink>
          </h5>
          <p v-if="post.description">
            {{ post.description }}
          </p>
          <!-- <ContentRenderer v-if="post.excerpt?.children.length" :value="post" :excerpt="true" /> -->
        </li>
      </template>
    </ul>
  </div>
</template>
