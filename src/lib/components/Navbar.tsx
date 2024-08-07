'use client';

import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import '~/lib/styles/menu.css';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <Box>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Image w={16} src="/logo.png" />
        </Box>
        <Flex h={16} justifyContent="space-between">
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Box
                w={40}
                as="a"
                className="menu_button"
                href="#"
                style={{ color: useColorModeValue('black', 'white') }}
                _hover={{
                  color: useColorModeValue('black', 'white'),
                }}
                _focus={{
                  color: useColorModeValue('black', 'white'),
                }}
                _after={{
                  bg: useColorModeValue('black', 'white'),
                }}
              >
                <Link href="/project">{t('projectList')}</Link>
              </Box>
              <ThemeToggle />
              <LanguageSelector />
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}
