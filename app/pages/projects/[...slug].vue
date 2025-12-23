<script setup lang="ts">
const { getProject } = useVContent();
const project = await getProject();
useSeoMeta({
  title: project?.title,
  description: project?.description
})
</script>
<template>
  <div v-if="project" class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div>
        <h4>{{ project.title }}</h4>
      </div>
      <div>
        <a v-if="project.url" target="_blank" :href="project.url">
          <font-awesome-icon icon="fa-solid fa-globe" size="xl" />
        </a>
        <a v-if="project.github" class="ms-1" target="_blank" :href="`https://github.com/${project.github}`">
          <font-awesome-icon icon="fa-brands fa-github" size="xl" />
        </a>
        <a v-else-if="project.source" class="ms-1" target="_blank" :href="project.source">
          <font-awesome-icon icon="fa-solid fa-code" size="xl" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <ContentRenderer :value="project" />
    </div>
    <div class="card-footer d-flex justify-content-between">
      <div>
        <a v-if="project.github" target="_blank" :href="`https://github.com/${project.github}`">
          <img alt="GitHub last commit" :src="`https://img.shields.io/github/last-commit/${project.github}?color=009000&logo=github`">
        </a>
      </div>
    </div>
  </div>
  <ErrorNotFound v-else />
</template>
