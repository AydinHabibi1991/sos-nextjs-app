// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import faTranslation from "./locales/fa.json";

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language if translation is missing
    supportedLngs: ["en", "fa"], // Supported languages (English and Farsi)
    debug: process.env.NODE_ENV === "development", // Enable debug in development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: { translation: enTranslation },
      fa: { translation: faTranslation },
    },
  });

export default i18n;