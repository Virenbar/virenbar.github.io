<template>
  <div class="card">
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
      <!-- TODO Fix navigation -->
      <!-- <nav aria-label="Post navigation">
        <div class="d-flex justify-content-between">
          <PageButton title="Previous" />
          <PageButton title="Next" />
        </div>
      </nav> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const path = useSwitchLocalePath()("ru");
const post = (await queryContent({
  where: [
    { _locale: locale.value },
    { _path: path }
  ]
}).findOne());
// setResponseStatus(404)
//{%- assign next = site.posts | where_exp: "item", "item.lang == page.lang and item.date > page.date" | last -%}
//{%- assign previous = site.posts | where_exp: "item", "item.lang == page.lang and item.date < page.date" | first -%}
//{%- include page-btn.html title="Previous" url=previous.url -%}
//{%- include page-btn.html title="Next" url=next.url -%}
</script>
