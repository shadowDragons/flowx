'use client';

import { Box, Flex, HStack, Link, useColorModeValue } from '@chakra-ui/react';

import { Logo } from './icons/Logo';
import ThemeToggle from './ThemeToggle';

import '~/lib/styles/menu.css';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  return (
    <Box>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          {/* <Box h={40} w={40} borderRadius="50%" overflow="hidden">
            <Logo
              height={40}
              width={40}
              color={useColorModeValue('black', 'white')}
            />
          </Box> */}
        </HStack>
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
                <Link href="/project">项目列表</Link>
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
