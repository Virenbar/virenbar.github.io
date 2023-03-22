<template>
  <div v-if="project" class="card">
    <div class="card-header d-flex justify-content-between">
      <h4>{{ project.title }}</h4>
      <a v-if="project.github" target="_blank" :href="`https://github.com/${project.github}`">
        <i class="fa-brands fa-github fa-xl" />
      </a>
      <a v-else-if="project.source" target="_blank" :href="project.source">
        <i class="fa-solid fa-code fa-xl" />
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
  <ErrorNotFound v-else />
</template>
<script setup lang="ts">
import { Nullable, Project } from "~~/types";
let project: Nullable<Project>;

const { getProject } = useDocument();
try {
  project = await getProject();
  useContentHead(project);
} catch (error) {
  console.log(error);
}
</script>
