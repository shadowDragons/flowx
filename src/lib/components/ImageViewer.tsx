'use client';

import type { ReactNode } from 'react';
import { ImageViewer as TDesignImageViewer, Space } from 'tdesign-react';
import 'tdesign-react/dist/tdesign.css';

interface CustomImageViewerProps {
  images: string[];
  children: (args: { open: () => void }) => ReactNode;
}

export default function CustomImageViewer({
  images,
  children,
}: CustomImageViewerProps) {
  return (
    <Space breakLine size={16}>
      <TDesignImageViewer
        trigger={children}
        images={images}
        title="Image Viewer"
      />
    </Space>
  );
}
