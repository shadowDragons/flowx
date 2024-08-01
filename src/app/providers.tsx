'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n'; // 确保路径正确
import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </I18nextProvider>
  );
};

export default Providers;
