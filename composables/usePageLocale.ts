import { ComputedRef } from "vue";
import { LocaleObject } from "vue-i18n-routing";

export default async function () {
  const I18n = useI18n();
  const available = I18n.locales as ComputedRef<LocaleObject[]>;
  const current = I18n.locale;

  const locales = ref<string[]>([]);
  locales.value = available.value.map(L => L.code); //["ru", "en", "es"];

  const switchLocalePath = useSwitchLocalePath();
  const route = useRoute();
  const path = ref("");
  const pages = ref<Page[]>([]);

  async function checkPages() {
    path.value = switchLocalePath("ru");
    pages.value = [];
    for (const locale of locales.value) {
      try {
        const query = await queryContent({
          where: [
            { _locale: locale },
            { _path: path.value }
          ]
        }).find();
        if (query.length) {
          const page = query[0];
          pages.value.push({
            locale,
            path: page._path,
            id: page._id
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    console.log(pages.value);
  }

  watchEffect(checkPages);

  return {
    current,
    available,
    path,
    pages
  };
}

interface Page {
  locale: string
  path?: string
  id: string
}
