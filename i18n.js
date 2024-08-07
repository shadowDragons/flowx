import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      copy: 'copy',
      copyDesc: 'has been copied to clipboard',
      name: '0xBen Full Stack Developer',
      metaData:
        'Full Stack Developer, freelance projects, APP development, website construction, mini-program development, H5 development',
      hello: 'Hello',
      heroIm: 'I am',
      projectList: 'Project List',
      heroDesc:
        'A full-stack developer with over 10 years of experience. I can provide website and APP development services. I also welcome like-minded partners to exchange ideas and learn together.',
      ourProject: 'Our Projects',
      showMore: 'Show More',
      showMorePics: 'View More Pictures',
      icando: 'What I Can Do',
      icandoDetail:
        'Provide APP development, WeChat development, Mini Program development, H5 development, website development, etc.',
      icandoMini: 'Mini Program Customization',
      icandoShop: 'E-commerce Platform',
      icandoCms: 'Enterprise Management System',
      icandoSoft: 'Custom Software Development',
      icandoServer: 'Server Setup',
      icandoSupport: 'Ongoing Technical Support',
      projectList: 'Projects',
    },
  },
  zh: {
    translation: {
      copy: '复制',
      copyDesc: '已经复制到剪切板',
      name: '0xBen 全栈开发工程师',
      metaData: '全栈开发工程师，接单，APP开发，网站建设，小程序开发、H5开发',
      hello: '你好',
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
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('zh') ? 'zh' : 'en';
  }
  return 'en'; // 默认返回英语，或者你可以从其他地方获取语言设置
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
    },
    lng: getDefaultLanguage(),
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
