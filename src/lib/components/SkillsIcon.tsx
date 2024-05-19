import { AntDesignIcon } from './icons/skill/AntDesign';
import { CssIcon } from './icons/skill/Css';
import { JavaIcon } from './icons/skill/Java';
import { JsIcon } from './icons/skill/Js';
import { LaravelIcon } from './icons/skill/Laravel';
import { MysqlIcon } from './icons/skill/Mysql';
import { NestjsIcon } from './icons/skill/Nestjs';
import { NextjsIcon } from './icons/skill/Nextjs';
import { PhpIcon } from './icons/skill/Php';
import { PrismaIcon } from './icons/skill/Prisma';
import { ReactIcon } from './icons/skill/React';
import { SpringbootIcon } from './icons/skill/Springboot';
import { VueIcon } from './icons/skill/Vue';

export default function SkillIcon({ skill, width, height }) {
  switch (skill) {
    case 'antDesign':
      return <AntDesignIcon height={height} width={width} />;
    case 'laravel':
      return <LaravelIcon height={height} width={width} />;
    case 'css':
      return <CssIcon height={height} width={width} />;
    case 'java':
      return <JavaIcon height={height} width={width} />;
    case 'js':
      return <JsIcon height={height} width={width} color="currentColor" />;
    case 'mysql':
      return <MysqlIcon height={height} width={width} color="currentColor" />;
    case 'nestjs':
      return <NestjsIcon height={height} width={width} />;
    case 'nextjs':
      return <NextjsIcon height={height} width={width} color="currentColor" />;
    case 'php':
      return <PhpIcon height={height} width={width} color="currentColor" />;
    case 'prisma':
      return <PrismaIcon height={height} width={width} />;
    case 'react':
      return <ReactIcon height={height} width={width} />;
    case 'springboot':
      return <SpringbootIcon height={height} width={width} />;
    case 'vue':
      return <VueIcon height={height} width={width} />;
    default:
      return null; // 或者返回一个默认的组件或者null
  }
}
