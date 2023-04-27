<script setup lang="ts">
import { Navigation } from "~~/types";

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
// Header links 
const navigation = await queryContent("navigation").findOne() as Navigation;
const links = navigation.header;
const { current, available } = useLocales();
</script>
<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
    <nav class="container font-monospace">
      <NuxtLink class="navbar-brand mx-auto" :to="localePath('/')">
        <img alt="" class="d-inline-block align-top rounded-circle" height="32" src="https://gravatar.com/avatar/e405f42d63f70e88dec627087aec4318" width="32">
        {{}}
        <Gradient text="@Virenbar" />
      </NuxtLink>
      <button aria-controls="global-navbar" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#global-navbar" data-bs-toggle="collapse" type="button">
        <i class="bi bi-three-dots" />
      </button>

      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <template v-for="link in links" :key="link.url">
            <li class="nav-item" :class="{ current: localePath($route.path, 'ru').endsWith(link.url) }">
              <NuxtLink class="nav-link" :to="localePath(link.url)">
                {{ $t(`page.${link.id}`) }}
              </NuxtLink>
            </li>
          </template>
        </ul>

        <div class="dropdown">
          <button aria-expanded="false" class="btn dropdown-toggle" data-bs-toggle="dropdown" type="button">
            <i class="fa-solid fa-globe" />
            {{ $t("language") }}
            {{ }}
          </button>
          <ul class="dropdown-menu dropdown-menu-dark" style="width:100%; min-width: 100%;">
            <template v-for="locale in available" :key="locale">
              <li>
                <NuxtLink class="dropdown-item" :class="{ active: locale == current }" :to="switchLocalePath(locale)">
                  {{ $t("language", 1, { locale: locale }) }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
