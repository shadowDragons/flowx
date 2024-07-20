import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Tag,
  Text,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import MotionBox from './motion/Box';
import {
  fadeInLeft,
  fadeInRight,
  staggerTextContainer,
} from './motion/variants';
import '~/lib/styles/project.scss';
import SkillIcon from './SkillsIcon';

import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { ViewIcon } from '@chakra-ui/icons';

import CustomImageViewer from './ImageViewer';

interface Item {
  id: number;
  title: string;
  img: string;
  imgs: string;
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

const items: Item[] = [
  {
    id: 1,
    imgclassname: imageContainPc,
    textclassname: textContainPc,
    title: '校园社交圈子',
    img: '/project/TradeZen/show2.png',
    imgs: ['/project/xiaolu/show1.png', '/project/TradeZen/show3.png'],
    desc: 'asdfsdf asdfasdf asdfsadfasdf asdfasdf asdf asdf asdfasdfasdf asdf fasdf as ',
    tags: ['aaa', 'bbb'],
    skills: [
      'laravel',
      'antDesign',
      'css',
      'java',
      'js',
      'mysql',
      'nestjs',
      'nextjs',
      'php',
      'prisma',
      'react',
      'springboot',
      'vue',
    ],
  },
  {
    id: 2,
    title: 'Next.js Blog',
    imgclassname: imageContainMobile,
    textclassname: textContainMobile,
    img: '/project/xiaolu/show2.png',
    imgs: ['/project/xiaolu/show1.png', '/project/TradeZen/show3.png'],
    desc: 'asdfsdf asdfasdf asdfsadfasdf asdfasdf asdf asdf asdfasdfasdf asdf fasdf as ',
    tags: ['aaa', 'bbb'],
    skills: [
      'laravel',
      'antDesign',
      'css',
      'java',
      'js',
      'mysql',
      'nestjs',
      'nextjs',
      'php',
      'prisma',
      'react',
      'springboot',
      'vue',
    ],
  },
];

const Single = ({ position, item }: { position: string; item: Item }) => {
  const [isMobile] = useMediaQuery(['(max-width: 768px)']);
  const trigger = ({ open }) => (
    <Button onClick={open} flex="1" variant="ghost" leftIcon={<ViewIcon />}>
      查看更多图片
    </Button>
  );
  return (
    <Flex marginTop={10} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={3} order={position === 'right' || isMobile ? 1 : 2}>
        <MotionBox variants={fadeInRight}>
          <img src={item.img} alt="" />
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
                  <Box as="span" marginRight={2}>
                    <SkillIcon height={6} width={9} skill={skill} />
                  </Box>
                </Tooltip>
              ))}
            </Box>
            <Box>
              <CustomImageViewer trigger={trigger} images={item.imgs} />
            </Box>
            <Box />
          </Box>
        </MotionBox>
      </Flex>
    </Flex>
  );
};

const Project = () => {
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
                我们的项目
              </Heading>
            </HStack>
          </Box>
          <Box>
            <Flex className="cta" alignItems="center">
              <Text
                className="catText"
                color={useColorModeValue('black', 'white')}
              >
                查看更多
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

      {items.map((item) => (
        <Box>
          <motion.div
            variants={staggerTextContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.6 }}
          >
            <Single position="left" item={item} key={item.id} />
          </motion.div>
          <motion.div
            variants={staggerTextContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.6 }}
          >
            <Single position="right" item={item} key={item.id} />
          </motion.div>
        </Box>
      ))}
    </div>
  );
};
export default Project;
