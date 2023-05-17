export default defineNuxtConfig({
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
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@virenbar/nuxt-lanyard"
  ],
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
    langDir: "locales"
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  runtimeConfig: {
    public: {
      json: "",
      storage: ""
    }
  }
});
