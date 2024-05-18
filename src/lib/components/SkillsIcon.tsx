import { GithubIcon } from './icons/Github';
import { QQIcon } from './icons/QQ';
import { WechatIcon } from './icons/Wechat';

export default function SkillIcon({ skill, width, height }) {
  switch (skill) {
    case 'github':
      return <GithubIcon height={height} width={width} color="currentColor" />;
    case 'qq':
      return <QQIcon height={height} width={width} color="currentColor" />;
    case 'wechat':
      return <WechatIcon height={height} width={width} color="currentColor" />;
    default:
      return null; // 或者返回一个默认的组件或者null
  }
}
