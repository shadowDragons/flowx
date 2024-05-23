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
} from '@chakra-ui/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

import '~/lib/styles/project.scss';
import SkillIcon from './SkillsIcon';

interface Item {
  id: number;
  title: string;
  img: string;
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
    title: 'React Commerce',
    img: '/pc-web.png',
    desc: 'asdf ',
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
    img: '/mobile-web.png',
    desc: 'sadfasdf',
    tags: ['aaa'],
    skills: ['github'],
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    imgclassname: imageContainPc,
    textclassname: textContainPc,
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'sdfasdfasdf',
    tags: ['aaa'],
    skills: ['github'],
  },
  {
    id: 4,
    title: 'Music App',
    imgclassname: imageContainPc,
    textclassname: textContainPc,
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'sdfasdf',
    tags: ['aaa'],
    skills: ['bbb'],
  },
];

const Single = ({ item }: { item: Item }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <Box as="section">
      <Box className="container">
        <Box className="wrapper">
          <Box className={item.imgclassname} ref={ref}>
            <img src={item.img} alt="" />
          </Box>
          <motion.div className={item.textclassname} style={{ y }}>
            <Heading as="h2" marginBottom={2}>
              {item.title}
            </Heading>
            <Box as="p" marginBottom={2}>
              {item.desc}
            </Box>
            <Box marginBottom={2}>
              {item.tags.map((tag) => (
                <Tag colorScheme="teal" marginRight={2}>
                  {tag}
                </Tag>
              ))}
            </Box>
            <Box marginBottom={2}>
              {item.skills.map((skill) => (
                <Tooltip label={skill}>
                  <Box as="span" marginRight={2}>
                    <SkillIcon height={5} width={5} skill={skill} />
                  </Box>
                </Tooltip>
              ))}
            </Box>
            <Button
              backgroundColor="orange.300"
              color={useColorModeValue('white', 'black')}
            >
              查看详情
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

const Project = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
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
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Project;
