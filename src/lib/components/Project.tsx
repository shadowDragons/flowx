import { ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

import CustomImageViewer from './ImageViewer';
import MotionBox from './motion/Box';
import {
  fadeInLeft,
  fadeInRight,
  staggerTextContainer,
} from './motion/variants';

import '~/lib/styles/project.scss';

interface Item {
  id: number;
  title: string;
  img: string;
  imgs: string[];
  desc: string;
  imgclassname: string;
  textclassname: string;
  tags: string[];
  skills: string[];
}

const imageContainPc: string = 'imageContainer-pc';
const imageContainMobile: string = 'imageContainer-mobile';
const textContainPc: string = 'imageContainer-pc';
const textContainMobile: string = 'imageContainer-mobile';

const zhItems: Item[] = [
  {
    id: 1,
    imgclassname: imageContainPc,
    textclassname: textContainPc,
    title: '校园社交圈子',
    img: '/project/xiaoyuanSocial/showIndex.png',
    imgs: [
      '/project/xiaoyuanSocial/detail1.png',
      '/project/xiaoyuanSocial/detail2.png',
      '/project/xiaoyuanSocial/detail3.png',
      '/project/xiaoyuanSocial/detail4.png',
    ],
    desc: '校园圈子论坛系统，结合ThinkPHP6、uniapp、Vue3和Element技术，为私域浏览和校园集市提供高效解决方案。',
    tags: [],
    skills: ['thinkphp', 'uniapp', 'mysql'],
  },
  {
    id: 2,
    title: '掌上点餐',
    imgclassname: imageContainMobile,
    textclassname: textContainMobile,
    img: '/project/handShop/showIndex.png',
    imgs: [
      '/project/handShop/detail1.png',
      '/project/handShop/detail2.png',
      '/project/handShop/detail3.png',
      '/project/handShop/detail4.png',
    ],
    desc: '外卖点餐系统，采用uniapp进行多端开发，使用MySQL、Spring Boot、Redis和RabbitMQ技术，实现高效的点餐、支付和配送功能。',
    tags: [],
    skills: ['uniapp', 'mysql', 'springboot', 'redis', 'rabbitmq'],
  },
  {
    id: 3,
    title: '外贸商城TradeZen',
    imgclassname: imageContainMobile,
    textclassname: textContainMobile,
    img: '/project/tradeZenMall/showIndex.png',
    imgs: [
      '/project/tradeZenMall/detail1.png',
      '/project/tradeZenMall/detail2.png',
    ],
    desc: '外贸商城系统，采用Next.js、Nest.js和Ant Design Pro技术栈，提供高效的前后端开发框架和优秀的用户界面，提升用户购物体验和系统性能。',
    tags: [],
    skills: ['nestjs', 'nextjs', 'antDesign', 'mysql'],
  },
  {
    id: 4,
    title: '迅达商城',
    imgclassname: imageContainMobile,
    textclassname: textContainMobile,
    img: '/project/xundaMall/showIndex.png',
    imgs: [
      '/project/xundaMall/detail1.png',
      '/project/xundaMall/detail2.png',
      '/project/xundaMall/detail3.png',
      '/project/xundaMall/detail4.png',
    ],
    desc: 'PC和移动端商城系统，采用ThinkPHP、uniapp、Node.js、Redis技术栈，提供跨平台开发和高效的数据缓存与处理，确保流畅的用户体验和稳定的性能。',
    tags: [],
    skills: ['nestjs', 'nextjs', 'antDesign', 'mysql'],
  },
];
const enItems: Item[] = [
  {
    id: 1,
    imgclassname: imageContainPc,
    textclassname: textContainPc,
    title: 'Campus Social Circle',
    img: '/project/xiaoyuanSocial/showIndex.png',
    imgs: [
      '/project/xiaoyuanSocial/detail1.png',
      '/project/xiaoyuanSocial/detail2.png',
      '/project/xiaoyuanSocial/detail3.png',
      '/project/xiaoyuanSocial/detail4.png',
    ],
    desc: 'A campus circle forum system, combining ThinkPHP6, uniapp, Vue3, and Element technologies to provide efficient solutions for private browsing and campus marketplaces.',
    tags: [],
    skills: ['thinkphp', 'uniapp', 'mysql'],
  },
  {
    id: 2,
    title: 'Mobile Ordering',
    imgclassname: imageContainMobile,
    textclassname: textContainMobile,
    img: '/project/handShop/showIndex.png',
    imgs: [
      '/project/handShop/detail1.png',
      '/project/handShop/detail2.png',
      '/project/handShop/detail3.png',
      '/project/handShop/detail4.png',
    ],
    desc: 'A takeaway ordering system developed using uniapp for multi-platform support, utilizing MySQL, Spring Boot, Redis, and RabbitMQ technologies to achieve efficient ordering, payment, and delivery functions.',
    tags: [],
    skills: ['uniapp', 'mysql', 'springboot', 'redis', 'rabbitmq'],
  },
  {
    id: 3,
    title: 'TradeZen - Foreign Trade Mall',
    imgclassname: imageContainMobile,
    textclassname: textContainMobile,
    img: '/project/tradeZenMall/showIndex.png',
    imgs: [
      '/project/tradeZenMall/detail1.png',
      '/project/tradeZenMall/detail2.png',
    ],
    desc: 'A foreign trade e-commerce system using Next.js, Nest.js, and Ant Design Pro technology stack, providing efficient front-end and back-end development frameworks and excellent user interface to enhance shopping experience and system performance.',
    tags: [],
    skills: ['nestjs', 'nextjs', 'antDesign', 'mysql'],
  },
  {
    id: 4,
    title: 'Xunda Mall',
    imgclassname: imageContainMobile,
    textclassname: textContainMobile,
    img: '/project/xundaMall/showIndex.png',
    imgs: [
      '/project/xundaMall/detail1.png',
      '/project/xundaMall/detail2.png',
      '/project/xundaMall/detail3.png',
      '/project/xundaMall/detail4.png',
    ],
    desc: 'A PC and mobile e-commerce system using ThinkPHP, uniapp, Node.js, and Redis technology stack, offering cross-platform development and efficient data caching and processing to ensure smooth user experience and stable performance.',
    tags: [],
    skills: ['nestjs', 'nextjs', 'antDesign', 'mysql'],
  },
];
const languageItems: Map<string, Item[]> = new Map([
  ['zh', zhItems],
  ['en', enItems],
]);

const TriggerButton = ({ open, text }: { open: () => void; text: string }) => (
  <Button onClick={open} flex="1" variant="ghost" leftIcon={<ViewIcon />}>
    {text}
  </Button>
);

const Single = ({ position, item }: { position: string; item: Item }) => {
  const [isMobile] = useMediaQuery(['(max-width: 768px)']);
  const { t } = useTranslation();
  return (
    <Flex marginTop={10} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={3} order={position === 'right' || isMobile ? 1 : 2}>
        <MotionBox variants={fadeInRight}>
          <Image src={item.img} alt="" />
        </MotionBox>
      </Flex>

      <Flex
        flex={2}
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        width="full"
        order={position === 'left' || isMobile ? 1 : 2}
      >
        <MotionBox variants={fadeInLeft}>
          <Box marginLeft={{ base: 10, md: position === 'left' ? 20 : 0 }}>
            <Heading as="h2" marginBottom={3}>
              {item.title}
            </Heading>
            <Box as="p" fontSize={20} marginBottom={3}>
              {item.desc}
            </Box>
            {/* <Box marginBottom={3}>
              {item.tags.map((tag) => (
                <Tag colorScheme="teal" marginRight={2} fontSize={20}>
                  {tag}
                </Tag>
              ))}
            </Box> */}
            {/* <Box marginBottom={3}>
              {item.skills.map((skill) => (
                <Tooltip label={skill}>
                  <Box as="span" marginRight={2}>
                    <SkillIcon height={6} width={9} skill={skill} />
                  </Box>
                </Tooltip>
              ))}
            </Box> */}
            <Box>
              <CustomImageViewer images={item.imgs}>
                {({ open }) => (
                  <TriggerButton open={open} text={t('showMorePics')} />
                )}
              </CustomImageViewer>
            </Box>
            <Box />
          </Box>
        </MotionBox>
      </Flex>
    </Flex>
  );
};

const Project = () => {
  const { t, i18n } = useTranslation();
  const items: Item[] | undefined = languageItems?.get(i18n.language);

  return (
    <div className="portfolio">
      <div className="progress">
        <Flex justify="space-between" alignItems="center">
          <Box>
            <HStack spacing={2}>
              <Box>
                <AiOutlineFundProjectionScreen
                  size={24}
                  color={useColorModeValue('black', 'white')}
                />
              </Box>
              <Heading
                as="h1"
                size="md"
                color={useColorModeValue('black', 'white')}
              >
                {t('ourProject')}
              </Heading>
            </HStack>
          </Box>
          <Box>
            <Flex className="cta" alignItems="center">
              <Text
                className="catText"
                color={useColorModeValue('black', 'white')}
              >
                {t('showMore')}
              </Text>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z"
                  fill={useColorModeValue('black', 'white')}
                />
              </svg>
            </Flex>
          </Box>
        </Flex>
        <Box className="progressBar" />
      </div>

      {items?.map((item, index) => (
        <Box key={item.id}>
          <motion.div
            variants={staggerTextContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.6 }}
          >
            <Single position={index % 2 === 0 ? 'right' : 'left'} item={item} />
          </motion.div>
        </Box>
      ))}
    </div>
  );
};
export default Project;
