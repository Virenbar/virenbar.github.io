export default defineNuxtPlugin(() => {
  let initialized = false;
  const available = useState("available", () => [""]);

  async function init() {
    initialized = true;

    const I18n = useI18n();
    const defaults = I18n.localeCodes.value;
    //available.value = defaults;

    async function checkLocales() {
      const switchLocalePath = useSwitchLocalePath();
      const path = switchLocalePath("ru");

      const locales = await Promise.all(defaults.map(async locale => {
        const query = await queryContent({
          where: [
            { _extension: "md" },
            { _locale: locale },
            { _path: path }
          ]
        }).find();
        return { locale, enabled: query.length > 0 };
      }));
      const contentLocales = locales.filter(q => q.enabled).map(q => q.locale);

      available.value = contentLocales.length ? contentLocales : defaults;
    }

    const route = useRoute();
    watch(() => route.fullPath, checkLocales);

    return checkLocales();
  }

  function locales() {
    if (!initialized) { init(); }
    const I18n = useI18n();
    return {
      defaults: I18n.localeCodes,
      available,
      current: I18n.locale,
    };
  }

  return {
    provide: {
      locales
    }
  };
});
