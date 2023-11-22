import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import frTranslations from "../locales/fr/translation.json";
import enTranslations from "../locales/en/translation.json";
import esTranslations from "../locales/es/translation.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  es: {
    translation: esTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en_GB",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
