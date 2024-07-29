'use client';

import { Select } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="zh">中文</option>
    </Select>
  );
}
