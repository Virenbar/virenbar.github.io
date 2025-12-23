<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { current, available } = useLocales();
const { mini, header: links } = usePath();
</script>
<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
    <nav class="container font-monospace">
      <NuxtLink class="navbar-brand" :class="{ 'mx-auto': !mini }" :to="localePath('/')">
        <img
          alt="" class="d-inline-block align-top rounded-circle" height="32" src="https://gravatar.com/avatar/e405f42d63f70e88dec627087aec4318"
          width="32">
        {{}}
        <Gradient text="@Virenbar" />
      </NuxtLink>
      <button
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbar"
        data-bs-toggle="collapse" type="button">
        <i class="bi bi-three-dots" />
      </button>

      <div v-if="!mini" id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <template v-for="link in links" :key="link.id">
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="localePath(link.path)" active-class="current">
                {{ $t(`page.${link.id}`) }}
              </NuxtLink>
            </li>
          </template>
        </ul>

        <div class="dropdown">
          <button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
            <font-awesome-icon icon="fa-solid fa-globe" />
            <!-- {{ $t("language") }} -->
            {{ current?.name }}
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" style="width:100%; min-width: 100%;">
            <template v-for="locale in available" :key="locale.code">
              <li>
                <NuxtLink class="dropdown-item" active-class="active" :to="switchLocalePath(locale.code)">
                  {{ locale.name }}
                  <!-- :class="{ active: locale.code == current.code }" -->
                  <!-- {{ $t("language", { locale: locale }) }} -->
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
