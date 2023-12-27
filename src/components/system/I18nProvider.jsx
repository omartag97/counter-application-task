import { useEffect } from "react";

import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { counterSelector } from "../../state";

function Theme() {
  const { i18n } = useTranslation();

  const { language: lang } = useSelector(counterSelector);

  const I18N_MAP = { en: "en", ar: "ar" };

  useEffect(() => {
    i18n.changeLanguage(I18N_MAP[lang]);
  }, [lang, i18n]);
}

export default Theme;
