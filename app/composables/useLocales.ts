export default function () {
  const { defaults, available, locale } = useNuxtApp().$locales();

  const current = computed(() => {
    const I18n = useI18n();
    return I18n.locales.value.find(l => l.code == I18n.locale.value);
  });

  const current_code = computed(() => {
    const code = locale.value;
    if (!code) return code;
    return ({
      ru: "ru_RU",
      en: "en_US",
      eo: "eo",
    })[code] || code;
  });

  return {
    defaults,
    available,
    current,
    current_code,
  };
}
