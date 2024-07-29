import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
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
  },
  lng: 'en', // 默认语言
  fallbackLng: 'en', // fallback语言
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
