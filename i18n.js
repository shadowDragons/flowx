import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hello: 'hello',
      projectList: 'projects',
    },
  },
  zh: {
    translation: {
      heroHello: '你好',
      heroIm: '我是',
      projectList: '项目列表',
      heroDesc:
        '一名全栈开发工程师，拥有10多年工作经验，我可以为您提供网站APP建设，同时也欢迎有志同道合的小伙伴一起交流学习',
      ourProject: '我们的项目',
      showMore: '查看更多',
      showMorePics: '查看更多图片',
      icando: '我能做',
      icandoDetail: '提供APP开发，微信开发、小程序开发、H5开发、网站开发等等',
      icandoMini: '小程序定制',
      icandoShop: '电子商城',
      icandoCms: '企业管理系统',
      icandoSoft: '软件按需定制',
      icandoServer: '服务器搭建',
      icandoSupport: '持续技术支持',
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
