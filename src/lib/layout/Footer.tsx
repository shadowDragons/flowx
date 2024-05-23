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
        </Link>{' '}
        <Link
          href="https://beian.miit.gov.cn/"
          isExternal
          rel="noopener noreferrer"
        >
          粤ICP备2024253980号
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
