<template>
  <div>
    <Title>{{ $t("page.blog") }}</Title>
    <h2>
      {{ $t("blog.title") }}
    </h2>
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
<script setup lang="ts">
import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

const localePath = useLocalePath();
const { locale } = useI18n();
const posts = (await queryContent({
  where: [
    { _locale: locale.value },
    { _path: { $contains: "posts" } }
  ]
}).sort({ date: -1 }).find()) as MarkdownParsedContent[];
console.log(locale.value);
console.log(posts);
</script>
