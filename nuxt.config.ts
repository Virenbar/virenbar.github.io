// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n"
  ],
  css: [
    "~/assets/css/styles.scss"
  ],
  app: {
    head: {
      script: [{ src: "https://kit.fontawesome.com/3d652cc361.js", crossorigin: "anonymous" }],
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "@Virenbar" }
      ]
    }
  },
  content: {
    documentDriven: true,
    locales: ["ru", "en", "eo"],
    defaultLocale: "ru",
    markdown: {
      anchorLinks: false
    }
  },
  i18n: {
    locales: [
      { code: "ru", file: "ru.json" },
      { code: "en", file: "en.json" },
      { code: "eo", file: "eo.json" }
    ],
    defaultLocale: "ru",
    langDir: "locales",
    vueI18n: {
      legacy: false,
      locale: "ru",
      fallbackLocale: "en"
    }
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  }
});
