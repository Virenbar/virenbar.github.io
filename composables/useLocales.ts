export default function () {
  const locales = useNuxtApp().$useLocales();

  return {
    defaults: locales.defaults,
    available: locales.available,
    current: locales.current
  };
}
