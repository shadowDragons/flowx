'use client';

import { ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import CustomImageViewer from '~/lib/components/ImageViewer';
import SkillIcon from '~/lib/components/SkillsIcon';
import 'tdesign-react/dist/tdesign.css';

interface Item {
  id: number;
  title: string;
  img: string;
  imgs: string[];
  desc: string;
  tags: string[];
  skills: string[];
}

const items: Item[] = [
  {
    id: 1,
    title: '校园社交圈子',
    img: '/project/xiaoyuanSocial/showList.png',
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
    img: '/project/handShop/showList.png',
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
    img: '/project/tradeZenMall/showList.png',
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
    img: '/project/xundaMall/showList.png',
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
  {
    id: 5,
    title: '小鹿新品商城',
    img: '/project/xiaoluMall/showList.png',
    imgs: [
      '/project/xiaoluMall/detail1.png',
      '/project/xiaoluMall/detail2.png',
      '/project/xiaoluMall/detail3.png',
      '/project/xiaoluMall/detail4.png',
    ],
    desc: '微信小程序商城系统，使用uniapp技术栈，实现跨平台开发，提供便捷的商品展示、购物车、支付和订单管理功能，确保用户在各个端口的流畅购物体验。',
    tags: [],
    skills: ['uniapp'],
  },
  {
    id: 6,
    title: '学生成绩管理系统',
    img: '/project/chengjiManager/showList.png',
    imgs: [
      '/project/chengjiManager/detail1.png',
      '/project/chengjiManager/detail2.png',
    ],
    desc: '学生成绩管理系统，采用Vue前端框架和Spring Boot后端框架，实现用户友好的界面设计和高效的数据管理与处理，确保学生成绩信息的准确记录和管理。',
    tags: [],
    skills: ['springboot', 'vue'],
  },
  {
    id: 6,
    title: '工具导航站',
    img: '/project/toolsSite/showList.png',
    imgs: ['/project/toolsSite/detail1.png'],
    desc: '实用工具导航站，基于Flutter技术开发，提供跨平台支持和优雅的用户界面，方便用户快速访问各种实用工具。',
    tags: [],
    skills: ['flutter'],
  },
];

const CartItem = ({ item }: { item: Item }) => {
  const trigger = ({ open }) => (
    <Button onClick={open} flex="1" variant="ghost" leftIcon={<ViewIcon />}>
      查看更多图片
    </Button>
  );

  return (
    <Card width={400}>
      <CardBody>
        <Image
          src={item.img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          <Text>{item.desc}</Text>
          <Box marginBottom={3}>
            {item.tags.map((tag) => (
              <Tag colorScheme="teal" marginRight={2} fontSize={20}>
                {tag}
              </Tag>
            ))}
          </Box>
          <Box marginBottom={3}>
            {item.skills.map((skill) => (
              <Tooltip label={skill}>
                <Box as="span" marginRight={1}>
                  <SkillIcon height={6} width={9} skill={skill} />
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <CustomImageViewer trigger={trigger} images={item.imgs} />
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <Box pl={10} pr={10}>
      {/* <Flex height={100} alignItems="center">
        <Heading as="h1">111</Heading>
      </Flex> */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={100}>
        {items.map((item) => (
          <CartItem item={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
