'use client';

import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';

import { Logo } from './icons/Logo';
import ThemeToggle from './ThemeToggle';

import '~/lib/styles/menu.css';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  return (
    <Box>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" height={10} width={100}>
          <Box>
            <Logo
              height="100%"
              width="100%"
              color={useColorModeValue('black', 'white')}
            />
          </Box>
        </HStack>
        <Flex h={16} justifyContent="space-between">
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Box
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
                项目列表
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
