import { execSync } from "child_process";

const exec = (command: string) => execSync(command).toString().trim();
const repository = "https://github.com/Virenbar/virenbar.github.io";
const branch = exec("git branch --show-current") || process.env.HEAD;
const hash = exec("git rev-parse HEAD") || process.env.COMMIT_REF;
const date = new Date().toISOString();

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@artmizu/yandex-metrika-nuxt",
    "@virenbar/nuxt-lanyard",
  ],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ["center"].includes(tag),
    },
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        highlight: {
          theme: "github-dark-default",
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      repository, branch, hash, date,
      storage_endpoint: "",
      storage_json: "",
    },
  }, routeRules: {
    "/storage/**": { ssr: false },
  },
  compatibilityDate: "2024-07-04",
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  // Silencing the deprecation warnings
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["color-functions", "global-builtin", "import"],
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    locales: [
      { code: "ru", name: "Русский", file: "ru.json" },
      { code: "en", name: "English", file: "en.json" },
      { code: "eo", name: "Esperanto", file: "eo.json" },
    ],
    defaultLocale: "ru",
    langDir: "locales",
  },
  yandexMetrika: { id: "87731504" },
});
