'use client';

import { Select } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <Select onChange={changeLanguage} value={i18n.language}>
      <option value="en">English</option>
      <option value="zh">中文</option>
    </Select>
  );
}

export default LanguageSelector;
