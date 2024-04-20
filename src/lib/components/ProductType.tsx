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
      <SimpleGrid
        height="400px"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, md: 20 }}
      >
        <Flex alignItems="center" justifyContent="center">
          <ProductTypeIcon width="600px" height="600px" color="#F6AD55" />
        </Flex>
        <Flex direction="column" justifyContent="space-around" height="400px">
          <Heading as="h2" size="md" py={3}>
            标题
          </Heading>
          <Text color={useColorModeValue('gray.500', 'gray.200')}>
            描述描述描述描述描述描述描述描述描述描述描述描述描述
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={3}>
            <Box as="button" className="serviceButton">
              <Box as="span">描述描述</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">描述描述</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">描述描述</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">描述描述</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">描述描述</Box>
            </Box>
            <Box as="button" className="serviceButton">
              <Box as="span">描述描述</Box>
            </Box>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
