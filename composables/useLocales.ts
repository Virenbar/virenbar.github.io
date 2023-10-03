export default function () {
  const locales = useNuxtApp().$locales();

  return {
    defaults: locales.defaults,
    available: locales.available,
    current: locales.current
  };
}
