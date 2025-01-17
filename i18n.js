// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "@/public/locales/en.json";
import thTranslations from "@/public/locales/th.json";
import zhTranslations from "@/public/locales/zh.json";
const resources = {
  en: {
    translation: enTranslations,
  },
  th: {
    translation: thTranslations,
  },
  zh:{
    translation: zhTranslations,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
