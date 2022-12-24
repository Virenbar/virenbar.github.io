// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@nuxt/content"
  ],
  css: [
    "~/assets/css/styles.scss"
  ],
  content: {
    documentDriven: true
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  }
});
