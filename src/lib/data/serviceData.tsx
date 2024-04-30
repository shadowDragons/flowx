import type { ServiceProps } from '../components/Service';

const services: ServiceProps[] = [
  {
    icon: '/savings.svg',
    heading: '超高性价比',
    description:
      '和传统外包公司比，我们没有高昂的人力成本和办公成本，所有的报价都根据程序员的工时来计算，性价比是最高的',
  },
  {
    icon: '/speed.svg',
    heading: '交付速度快',
    description:
      '我们有1000+程序员在线接单，其中有很多兄弟在全职接单，比较急的需求，可以更快速的匹配到做过类似需求的兄弟，缩短交付时间',
  },
  {
    icon: '/credit.svg',
    heading: '交易有保障',
    description:
      '我们可以提供第三方担保服务，需求完成后才给钱，需求完不成不给钱，保障您的需求能顺利交付，一分钱都不浪费',
  },
  {
    icon: '/select.svg',
    heading: '类型多样化',
    description:
      '只要您的需求是合理合法的，都能找到合适的人帮你做，程序定制开发、bug修复、远程答疑等等，有需求来找我们就对了',
  },
];

export default services;
