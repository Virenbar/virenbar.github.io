<script setup lang="ts">
const { defaults, available, current } = useLocales();
const date = new Date().getFullYear();
const path = useSwitchLocalePath();
const lanyard = useLanyard();
</script>
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
      {{}}
      <span aria-controls="debug" data-bs-target="#debug" data-bs-toggle="offcanvas"> {{ date }} </span>
      Virenbar
    </div>
    <div class="d-none d-md-block">
      This
      <a href="https://github.com/Virenbar/virenbar.github.io">website</a>
      made using
      <a href="https://nuxt.com/">
        <i class="fa-solid fa-mountain" />
        Nuxt
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
        <ul>
          <li>Locales:</li>
          <ul>
            <li>Defaults: {{ defaults.join(", ") }}</li>
            <li>Available: {{ available.join(", ") }}</li>
            <li>Current: {{ current }}</li>
          </ul>
          <li>Language: {{ $t('language') }}({{ current }})</li>
          <li>Path(default):<br> {{ path("ru") }}</li>
          <li>Path(locale):<br> {{ $route.path }}</li>
          <li>Status: {{ lanyard?.discord_status }}</li>
          <li>Activity: {{ lanyard?.activities[0]?.name }}</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

