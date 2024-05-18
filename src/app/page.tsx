'use client';

import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiFillCustomerService } from 'react-icons/ai';

import Hero from '~/lib/components/Hero';
import {
  fadeInDown,
  staggerTextContainer,
} from '~/lib/components/motion/variants';
import ProductType from '~/lib/components/ProductType';
import Project from '~/lib/components/Project';
import Service from '~/lib/components/Service';

import '~/lib/styles/moreButton.css';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
      flex="auto"
    >
      <Box w="full" pl={10} pr={10} mb={20}>
        <Hero />
      </Box>

      <Box w="full">
        <Box
          pl={10}
          pr={10}
          pt={100}
          paddingBottom={100}
          bg={useColorModeValue('gray.50', 'gray.700')}
        >
          <ProductType />
        </Box>

        {/* <Box w="full" pl={10} pr={10} pt={100} paddingBottom={100}>
          <Flex justify="space-between" alignItems="center">
            <Box>
              <HStack spacing={2}>
                <Box>
                  <AiOutlineFundProjectionScreen size={24} />
                </Box>
                <Heading as="h1" size="md">
                  我们的项目
                </Heading>
              </HStack>
            </Box>
            <Box>
              <Flex
                className="cta"
                alignItems="center"
                _before={{
                  backgroundColor: useColorModeValue(
                    'orange.200',
                    'orange.400'
                  ),
                }}
                _hover={{
                  before: {
                    backgroundColor: useColorModeValue(
                      'orange.200',
                      'orange.400'
                    ),
                  },
                }}
              >
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

          <Flex
            flexWrap="wrap"
            alignItems="flex-start"
            height={{ base: 1300, md: 400 }}
            justify="space-around"
            pt={100}
            paddingBottom={100}
            direction={{ base: 'column', md: 'row' }}
          >
            <ProjectItem name="卡片名称" image="/pc-web.png" type="pc" />
            <ProjectItem name="卡片名称" image="/pc-web.png" type="pc" />
            <ProjectItem name="卡片名称" image="/pc-web.png" type="pc" />
          </Flex>
          <Flex
            flexWrap="wrap"
            alignItems="flex-start"
            height={{ base: 2000, md: 500 }}
            overflow="hidden"
            justify="space-around"
            pt={100}
            paddingBottom={100}
          >
            <ProjectItem
              name="卡片名称"
              image="/mobile-web.png"
              type="mobile"
            />
            <ProjectItem
              name="卡片名称"
              image="/mobile-web.png"
              type="mobile"
            />
            <ProjectItem
              name="卡片名称"
              image="/mobile-web.png"
              type="mobile"
            />
            <ProjectItem
              name="卡片名称"
              image="/mobile-web.png"
              type="mobile"
            />
          </Flex>
        </Box> */}

        <Box w="full" pl={10} pr={10} pt={100} paddingBottom={100}>
          <Project />
        </Box>

        <Box
          w="full"
          bg={useColorModeValue('gray.50', 'gray.700')}
          pl={10}
          pr={10}
          pt={100}
          paddingBottom={100}
        >
          <motion.div
            variants={staggerTextContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.6 }}
          >
            <motion.div variants={fadeInDown}>
              <Flex my={10} justifyContent="center" alignItems="center">
                <Box marginRight={4}>
                  <AiFillCustomerService size={40} />
                </Box>
                <Heading as="h2" size="md" fontWeight={600} fontSize="4xl">
                  我们的服务
                </Heading>
              </Flex>
            </motion.div>
            <Service />
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
