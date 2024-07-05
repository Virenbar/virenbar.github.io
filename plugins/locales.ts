import type { LocaleObject } from "@nuxtjs/i18n";

export default defineNuxtPlugin(() => {
  let initialized = false;
  const available = useState<LocaleObject[]>("available", () => []);

  async function init() {
    initialized = true;
    const I18n = useI18n();
    const defaults = I18n.locales.value;

    async function checkLocales() {
      const switchLocalePath = useSwitchLocalePath();
      const path = switchLocalePath(I18n.defaultLocale);
      const locales = await Promise.all(defaults.map(async (locale) => {
        const query = await queryCollection("content").path(`/${locale.code}${path}`).all();
        // console.log(`${locale.code}${path}`);
        // console.log(query);
        return { locale, enabled: query.length > 0 };
      }));
      const contentLocales = locales.filter(q => q.enabled).map(q => q.locale);

      available.value = contentLocales.length ? contentLocales : defaults;
    }

    const route = useRoute();
    watch(() => route.fullPath, checkLocales);

    checkLocales();
  }

  function locales() {
    const I18n = useI18n();
    available.value = I18n.locales.value;

    if (!initialized) init();
    return {
      defaults: I18n.localeCodes,
      locale: I18n.locale,
      available,
    };
  }

  return { provide: { locales } };
});
