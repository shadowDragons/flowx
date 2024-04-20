import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://flowx-studio.com"
          isExternal
          rel="noopener noreferrer"
        >
          flowx-studio.com
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
