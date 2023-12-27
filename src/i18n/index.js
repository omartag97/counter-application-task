import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import counter from "../locales/index.js";

const resources = {
  ar: {
    counter: counter.ar,
  },

  en: {
    counter: counter.en,
  },
};

i18n.use(initReactI18next).init({
  resources,

  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],

  defaultNS: "fallback",
  fallbackNS: "fallback",

  keySeparator: ".",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
