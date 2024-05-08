import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import '~/lib/styles/serviceButton.css';

import { ProductTypeIcon } from './icons/ProductTypeIcon';

export default function ProductType() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }}>
        <Flex alignItems="center" justifyContent="center">
          <ProductTypeIcon width="full" height="full" color="#F6AD55" />
        </Flex>
        <Flex direction="column" justifyContent="space-around">
          <Heading as="h2" size="md" py={3}>
            我们能做
          </Heading>
          <Text color={useColorModeValue('gray.500', 'gray.200')}>
            我们提供APP开发，微信开发、小程序开发、H5开发、网站开发等等
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={3}>
            <Box as="button" className="serviceButton">
              <Box as="span">小程序定制</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">电子商城</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">企业管理系统</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">软件按需定制</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">服务器搭建</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">持续技术支持</Box>
            </Box>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
