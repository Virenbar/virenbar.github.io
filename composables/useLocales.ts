export default function () {
  const I18n = useI18n();
  const current = I18n.locale;
  const defaults = I18n.localeCodes.value;
  const available = ref(defaults);

  async function checkLocales() {
    const switchLocalePath = useSwitchLocalePath();
    const path = switchLocalePath("ru");
    const contentLocales = [];

    for (const locale of defaults) {
      const query = await queryContent({
        where: [
          { _extension: "md" },
          { _locale: locale },
          { _path: path }
        ]
      }).find();
      if (query.length) { contentLocales.push(locale); }
    }

    available.value = contentLocales.length ? contentLocales : defaults;
  }

  // const router = useRouter();
  // watch(router.currentRoute, checkLocales);
  // const route = useRoute();
  // watch(() => route.fullPath, checkLocales);

  return {
    current,
    defaults,
    available,
    checkLocales
  };
}
