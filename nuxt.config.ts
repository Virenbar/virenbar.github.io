export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
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
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@virenbar/nuxt-lanyard",
    "yandex-metrika-module-nuxt3"
  ],
  content: {
    documentDriven: false,
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
    lazy: true, // Inverted in @nuxtjs/i18n beta.13, remove when fixed
    langDir: "locales"
  },
  yandexMetrika: { id: "87731504" },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  runtimeConfig: {
    public: {
      storage_endpoint: "",
      storage_json: ""
    }
  }
});
