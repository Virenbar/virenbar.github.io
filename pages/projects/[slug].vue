<template>
  <div class="card">
    <Title>{{ project.title }}</Title>
    <div class="card-header d-flex justify-content-between">
      <h4>{{ project.title }}</h4>
      <a v-if="project.github" target="_blank" :href="`https://github.com/${project.github}`">
        <h4>
          <i class="fa-brands fa-github" />
        </h4>
      </a>
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
</template>
<script setup lang="ts">
const { getProject } = useDocument();
const project = await getProject();
</script>
