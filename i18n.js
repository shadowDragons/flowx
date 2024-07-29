import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hello: 'hello',
    },
  },
  zh: {
    translation: {
      hello: '你好',
    },
  },
};

function getDefaultLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('zh') ? 'zh' : 'en';
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator'],
    },
    lng: getDefaultLanguage(),
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
