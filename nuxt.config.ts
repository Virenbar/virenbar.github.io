// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n"
  ],
  css: [
    "~/assets/css/styles.scss"
  ],
  content: {
    documentDriven: true,
    locales: ["ru", "en", "es"],
    defaultLocale: "ru",
    markdown: {
      anchorLinks: false
    }
  },
  i18n: {
    locales: [
      {
        code: "ru",
        file: "ru.json"
      }, {
        code: "en",
        file: "en.json"
      }, {
        code: "es",
        file: "es.json"
      }
    ],
    defaultLocale: "ru",
    langDir: "locales",
    //lazy: true,
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
