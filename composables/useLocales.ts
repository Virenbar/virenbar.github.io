import { LocaleObject } from "vue-i18n-routing";

export default function () {
  const I18n = useI18n();
  const available = I18n.locales.value as unknown as LocaleObject[];
  const current = I18n.locale;
  return {
    current,
    available
  };
}
