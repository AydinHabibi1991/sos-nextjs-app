import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import faTranslation from "./locales/fa.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: "en", 
    supportedLngs: ["en", "fa"], 
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: { translation: enTranslation },
      fa: { translation: faTranslation },
    },
  });

export default i18n;