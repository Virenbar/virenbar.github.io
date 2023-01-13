import { ComputedRef } from "vue";
import { LocaleObject } from "vue-i18n-routing";

export default function () {
  const I18n = useI18n();
  const available = I18n.locales as ComputedRef<LocaleObject[]>;
  const current = I18n.locale;
  return {
    current,
    available
  };
}
