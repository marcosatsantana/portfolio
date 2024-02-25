import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./src/translate/ptbr.json"
import en from "./src/translate/en.json"

const resources = {
  en: {
    translation: en
  },
  pt: {
    translation: pt
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;