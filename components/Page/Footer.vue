<script setup lang="ts">
const { repository, branch, hash, date } = useRuntimeConfig().public;

const branchURL = `${repository}/tree/${branch}`;
const tree = hash.substring(0, 7);
const treeURL = `${repository}/tree/${hash}`;
const year = new Date().getFullYear();

const { defaults, available, current } = useLocales();
const path = useSwitchLocalePath();
</script>
<template>
  <footer class="container-fluid py-1 px-3 bg-secondary row mx-auto">
    <div class="col">
      Made with
      <NuxtLink target="_blank" to="https://nuxt.com/">
        <i class="fa-solid fa-mountain" /> Nuxt
      </NuxtLink>
      and
      <NuxtLink target="_blank" to="https://pages.github.com/">
        <i class="fa-brands fa-github" /> GitHub Pages
      </NuxtLink>
    </div>

    <div class="col text-center">
      <span class="far fa-copyright" title="Copyright" />
      {{}}
      <span aria-controls="debug" data-bs-target="#debug" data-bs-toggle="offcanvas"> {{ year }} </span>
      Virenbar
    </div>

    <div class="col text-end">
      Build:
      <NuxtLink :to="branchURL" target="_blank">
        {{ branch }}
      </NuxtLink>
      <span v-if="tree != 'unknown'">@<NuxtLink :to="treeURL" target="_blank"> {{ tree }} </NuxtLink></span>
      <span v-else>#{{ formatDate(new Date(date)).replaceAll(".", "") }}</span>
    </div>

    <div id="debug" class="offcanvas offcanvas-start" data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">
          Debug Tab
        </h5>
        <button a class="btn-close" data-bs-dismiss="offcanvas" type="button" />
      </div>
      <div class="offcanvas-body">
        <ul>
          <li>Locales:</li>
          <ul>
            <li>Defaults: {{ defaults?.join(", ") }}</li>
            <li>Available: {{ available?.join(", ") }}</li>
            <li>Current: {{ current }}</li>
          </ul>
          <li>Language: {{ $t('language') }}({{ current }})</li>
          <li>Path(default):<br> {{ path?.("ru") }}</li>
          <li>Path(locale):<br> {{ $route.path }}</li>
          <DiscordTest />
        </ul>
        <NuxtLink to="/storage/">
          Storage
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
