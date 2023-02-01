import { ComputedRef } from "vue";
import { LocaleObject } from "vue-i18n-routing";

export default function () {
  const I18n = useI18n();
  const available = I18n.locales as ComputedRef<LocaleObject[]>;
  const current = I18n.locale;

  const switchLocalePath = useSwitchLocalePath();
  const path = ref(switchLocalePath("ru"));

  const locales = ref<string[]>([]);
  locales.value = available.value.map(L => L.code); //["ru", "en", "es"];

  async function checkPages() {
    path.value = switchLocalePath("ru");
    const contentLocales = [];

    for (const locale of available.value.map(L => L.code)) {
      try {
        const query = await queryContent({
          where: [
            { _extension: "md" },
            { _locale: locale },
            { _path: path.value }
          ]
        }).find();
        if (query.length) { contentLocales.push(locale); }
      } catch (error) {
        console.log(error);
      }
    }
    if (contentLocales.length) {
      locales.value = contentLocales;
    } else {
      locales.value = available.value.map(L => L.code);
    }
  }

  watchEffect(checkPages);

  return {
    current,
    available,
    locales,
    path
  };
}
