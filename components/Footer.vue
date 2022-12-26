<template>
  <footer class="container-fluid py-1 px-3 bg-secondary d-flex justify-content-between align-items-center">
    <div class="d-none d-md-block">
      Hosted on
      <a href="https://pages.github.com/">
        <i class="fa-brands fa-github" />
        GitHub Pages
      </a>
    </div>

    <div class="mx-auto">
      <span class="far fa-copyright" title="Copyright" />
      <span aria-controls="debug" data-bs-target="#debug" data-bs-toggle="offcanvas"> {{ date }}
      </span>
      Virenbar
    </div>
    <div class="d-none d-md-block">
      This
      <a href="https://github.com/Virenbar/virenbar.github.io">site</a>
      made using
      <a href="https://v3.nuxtjs.org/">
        <i class="fa-solid fa-mountain" />
        Nuxt3
      </a>
    </div>
    <div id="debug" class="offcanvas offcanvas-start" data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">
          Debug Tab
        </h5>
        <button a class="btn-close" data-bs-dismiss="offcanvas" type="button" />
      </div>
      <div class="offcanvas-body">
        <ul v-for="item in items" :key="item.T1">
          <li>{{ item }}</li>
        </ul>
        <div>
          {{ C }}
        </div>
        <div>
          <!-- {{ projects | inspect }} -->
        </div>
        <div>
          <!-- {{ t | inspect }} -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();
const date = new Date().getFullYear();
const items = [{ Language: t("language") }, { T1: "T1" }, { T2: "T2" }];
const C = useContent();
</script>
