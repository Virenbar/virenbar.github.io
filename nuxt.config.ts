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
  routeRules: {
    "/storage/**": { ssr: false }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@artmizu/yandex-metrika-nuxt",
    "@virenbar/nuxt-lanyard"
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
      repository: "https://github.com/Virenbar/virenbar.github.io",
      branch: process.env.HEAD || "master",
      hash: process.env.COMMIT_REF || "unknown",
      date: new Date().toISOString(),
      storage_endpoint: "",
      storage_json: ""
    }
  }
});
