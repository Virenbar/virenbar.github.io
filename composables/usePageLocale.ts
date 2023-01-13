import { ComputedRef } from "vue";
import { LocaleObject } from "vue-i18n-routing";

const locales = ["ru", "en", "es"];

export default async function () {
  const switchLocalePath = useSwitchLocalePath();
  const route = useRoute();
  const I18n = useI18n();

  const available = I18n.locales as ComputedRef<LocaleObject[]>;
  const current = I18n.locale;
  const path = ref("");
  const pages = ref<Page[]>([]);

  async function ff() {
    path.value = switchLocalePath("ru");
    pages.value = [];
    for (const locale of locales) {
      try {
        const page = await queryContent({
          where: [
            { _locale: locale },
            { _path: path.value }
          ]
        }).findOne();
        pages.value.push({
          locale,
          path: page._path,
          id: page._id
        });
      } catch (error) {
        console.log(error);
      }
    }
    console.log(pages.value);
  }

  watchEffect(ff);

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
