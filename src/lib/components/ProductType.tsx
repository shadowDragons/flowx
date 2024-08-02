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
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
                {t('icando')}
              </Heading>
              <Text color={useColorModeValue('gray.500', 'gray.200')}>
                {t('icandoDetail')}
              </Text>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={3}>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">{t('icandoMini')}</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">{t('icandoShop')}</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">{t('icandoCms')}</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">{t('icandoSoft')}</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">{t('icandoServer')}</Box>
                </Box>
              </motion.div>
              <motion.div variants={fadeInLeft}>
                <Box as="button" className="serviceButton" width="100%">
                  <Box as="span">{t('icandoSupport')}</Box>
                </Box>
              </motion.div>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </motion.div>
    </Box>
  );
}
