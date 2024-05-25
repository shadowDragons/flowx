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
    img: '/project/TradeZen/show2.png',
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
    desc: 'asdfsdf asdfasdf asdfsadfasdf asdfasdf asdf asdf asdfasdfasdf asdf fasdf as',
    tags: ['aaa'],
    skills: ['github'],
  },
];

const Single1 = ({ item }: { item: Item }) => {
  return (
    <Flex marginTop={10}>
      <Box flex={3}>
        <img src={item.img} alt="" />
      </Box>
      <Flex
        flex={2}
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        width="full"
      >
        <Box width="80%">
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
        </Box>
      </Flex>
    </Flex>
  );
};

const Single2 = ({ item }: { item: Item }) => {
  return (
    <Flex marginTop={10}>
      <Flex
        flex={2}
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
      >
        <Box width="80%">
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
        </Box>
      </Flex>
      <Box flex={3}>
        <img src={item.img} alt="" />
      </Box>
    </Flex>
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
        <Box>
          <Single1 item={item} key={item.id} />
          <Single2 item={item} key={item.id} />
        </Box>
      ))}
    </div>
  );
};
export default Project;
