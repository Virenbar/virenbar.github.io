<template>
  <div>
    <Title>{{ $t("page.projects") }}</Title>
    <h3>
      {{ $t("page.projects") }}
    </h3>
    <ul>
      <template v-for="project in projects" :key="project.id">
        <li>
          <h4>
            <NuxtLink :to="localePath(project._path!)">
              {{ project.title }}
            </NuxtLink>
          </h4>
        </li>
      </template>
    </ul>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath();
const { getProjects } = useDocument();
const projects = await getProjects();
</script>
