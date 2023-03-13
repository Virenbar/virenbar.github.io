import { ComputedRef } from "vue";
import { LocaleObject } from "vue-i18n-routing";

let codes = <string[]>[];
const locales = ref<string[]>([]);
let path = "";

export default function () {
  const I18n = useI18n();
  const current = I18n.locale;
  const available = I18n.locales as ComputedRef<LocaleObject[]>;
  codes = available.value.map(L => L.code);
  locales.value = codes;

  const switchLocalePath = useSwitchLocalePath();
  path = switchLocalePath("ru");

  async function checkPages() {
    path = switchLocalePath("ru");
    const contentLocales = [];
    for (const locale of codes) {
      const query = await queryContent({
        where: [
          { _extension: "md" },
          { _locale: locale },
          { _path: path }
        ]
      }).find();
      if (query.length) { contentLocales.push(locale); }
    }

    locales.value = contentLocales.length ? contentLocales : codes;
    //console.log(path.value);
    //console.log(locales);
  }

  const route = useRoute();
  watch(() => route.fullPath, checkPages);

  return {
    current,
    available,
    locales
  };
}
