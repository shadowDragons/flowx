'use client';

import { Box } from '@chakra-ui/react';
import { BrowseIcon } from 'tdesign-icons-react';
import { Image, ImageViewer, Space } from 'tdesign-react';
import 'tdesign-react/dist/tdesign.css';
import type { TNode } from 'tdesign-react/es/common';
// 全局引入所有组件样式代码
const imgH = '/project/xiaolu/show1.png';
const imgV = '/project/TradeZen/show3.png';
const img = '/project/TradeZen/show2.png';

export default function CustomImageViewer({
  images,
  trigger,
}: {
  images: string[];
  trigger: TNode;
}) {
  // const images = [img, imgV, imgH];

  return (
    <Space breakLine size={16}>
      <ImageViewer trigger={trigger} images={images} title="11" />
    </Space>
  );
}
