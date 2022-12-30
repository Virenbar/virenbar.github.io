<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h4>{{ post.title }}</h4>
      <span class="text-muted">
        {{ post.date }}
      </span>
    </div>
    <div class="card-body">
      <ContentDoc />
    </div>
    <div class="card-footer">
      <nav aria-label="Post navigation">
        <div class="d-flex justify-content-between">
          <PageButton title="Previous" />
          <PageButton title="Next" />
        </div>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const route = useRoute();
const path = route.path.replace(`/${locale.value}`, "");
const post = (await queryContent({
  where: [
    { _locale: locale.value },
    { _path: path }
  ]
}).findOne());
console.log(locale);
console.log(post);
// setResponseStatus(404)
//{%- assign next = site.posts | where_exp: "item", "item.lang == page.lang and item.date > page.date" | last -%}
//{%- assign previous = site.posts | where_exp: "item", "item.lang == page.lang and item.date < page.date" | first -%}
//{%- include page-btn.html title="Previous" url=previous.url -%}
//{%- include page-btn.html title="Next" url=next.url -%}
</script>
