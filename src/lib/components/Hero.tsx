'use client';

import {
  Stack,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

import { GithubIcon } from './icons/Github';
import { Hexo } from './icons/Hexo';
import { QQIcon } from './icons/QQ';
import { WechatIcon } from './icons/Wechat';

import '~/lib/styles/contactButton.css';

export default function Hero() {
  return (
    <Stack
      align="center"
      py={{ base: 8, md: 8 }}
      spacing={{ base: 20, md: 20 }}
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
        >
          <Text as="span" color="orange.300" marginRight={2}>
            您好 👋 我们是
          </Text>
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'orange.400',
              zIndex: -1,
            }}
            whiteSpace="nowrap"
          >
            FlowX
          </Text>
        </Heading>
        <Text color={useColorModeValue('gray.500', 'gray.400')}>
          我们为有需进行外包开发的客户朋友提供一个专业的开发团队 <br />
          我们为客户提供高效的项目进度管理,高质量的项目成果以及最适合的开发者
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Box className="contractWrap">
            <Box
              className="icon qq"
              backgroundColor={useColorModeValue('white', 'black')}
              _hover={{ color: '#fff' }}
            >
              <span className="tooltip">1005131326</span>
              <Box>
                <QQIcon height={8} width={8} color="currentColor" />
              </Box>
            </Box>
            <Box
              className="icon wechat"
              backgroundColor={useColorModeValue('white', 'black')}
              _hover={{ color: '#fff' }}
            >
              <span className="tooltip">jandan1990</span>
              <Box>
                <WechatIcon height={8} width={8} color="currentColor" />
              </Box>
            </Box>
            <Box
              className="icon github"
              backgroundColor={useColorModeValue('white', 'black')}
              _hover={{ color: '#fff' }}
            >
              <span className="tooltip">shadowDragons</span>
              <Box>
                <GithubIcon height={8} width={8} color="currentColor" />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify="center"
        align="center"
        position="relative"
        w="full"
      >
        <Hexo height="full" width="full" />
      </Flex>
    </Stack>
  );
}
