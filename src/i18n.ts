import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import frTranslations from "./locales/fr.json";
import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en_US",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.addResourceBundle("fr_FR", "translation", frTranslations);
i18n.addResourceBundle("en_US", "translation", enTranslations);
i18n.addResourceBundle("es_ES", "translation", esTranslations);

export default i18n;
