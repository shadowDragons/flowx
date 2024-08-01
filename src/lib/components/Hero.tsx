'use client';

import {
  Stack,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Hexo } from './icons/Hexo';
import { QQIcon } from './icons/QQ';
import '~/lib/styles/contactButton.css';
import '~/lib/styles/wave.css';
import '~/lib/styles/hero.css';
import { fadeInDown, fadeInLeft, staggerContainer } from './motion/variants';
import { TwitterIcon } from './icons/Twitter';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      viewport={{ once: false, amount: 0.6 }}
    >
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
            fontWeight={500}
            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
          >
            <motion.div variants={fadeInDown} style={{ marginBottom: '10px' }}>
              <Text as="span" color="orange.300" marginRight={2}>
                {t('heroHello')}
                <span className="wave">👋🏻</span>
              </Text>

              <Text as="span" color="orange.300" marginRight={2}>
                {t('heroIm')}
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
                0xBen
              </Text>
            </motion.div>
          </Heading>
          <motion.div variants={fadeInDown}>
            <Text
              fontSize={20}
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              {t('heroDesc')}
            </Text>
          </motion.div>

          <motion.div variants={fadeInDown}>
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
                  <span className="tooltip">1735089854</span>
                  <Box>
                    <QQIcon height={8} width={8} color="currentColor" />
                  </Box>
                </Box>
                <Box
                  className="icon twitter"
                  backgroundColor={useColorModeValue('white', 'black')}
                  _hover={{ color: '#fff' }}
                >
                  <span className="tooltip">shadow06368306</span>
                  <Box>
                    <TwitterIcon height={8} width={8} color="currentColor" />
                  </Box>
                </Box>
                {/* <Box
                  className="icon github"
                  backgroundColor={useColorModeValue('white', 'black')}
                  _hover={{ color: '#fff' }}
                >
                  <span className="tooltip">shadowDragons</span>
                  <Box>
                    <GithubIcon height={8} width={8} color="currentColor" />
                  </Box>
                </Box> */}
              </Box>
            </Stack>
          </motion.div>
        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
          h="full"
        >
          <Box className="background2" width="100%" />
          <motion.div
            variants={fadeInLeft}
            style={{ width: '100%', zIndex: 1 }}
          >
            <Hexo height="full" width="full" />
          </motion.div>
        </Flex>
      </Stack>
    </motion.div>
  );
}
