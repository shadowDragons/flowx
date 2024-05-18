import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import '~/lib/styles/serviceButton.css';

import { motion } from 'framer-motion';

import { ProductTypeIcon } from './icons/ProductTypeIcon';
import { fadeInLeft, fadeInRight } from './motion/variants';

export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function ProductType() {
  return (
    <Box>
      <motion.div
        variants={staggerTextContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.6 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }}>
          <motion.div variants={fadeInRight}>
            <Flex alignItems="center" justifyContent="center">
              <ProductTypeIcon width="full" height="full" color="#F6AD55" />
            </Flex>
          </motion.div>

          <Flex direction="column" justifyContent="space-around">
            <motion.div variants={fadeInLeft}>
              <Heading as="h2" size="md" py={3}>
                我们能做
              </Heading>
              <Text color={useColorModeValue('gray.500', 'gray.200')}>
                我们提供APP开发，微信开发、小程序开发、H5开发、网站开发等等
              </Text>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={3}>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">小程序定制</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">电子商城</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">企业管理系统</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">软件按需定制</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">服务器搭建</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">持续技术支持</Box>
                </Box>
              </motion.div>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </motion.div>
    </Box>
  );
}
