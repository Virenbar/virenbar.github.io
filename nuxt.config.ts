// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: [
    "~/assets/css/styles.scss"
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
          integrity: "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF", crossorigin: "anonymous", defer: "true"
        }, {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
          integrity: "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p", crossorigin: "anonymous", defer: "true"
        }
      ]
    }
  }

})
