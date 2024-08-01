import type { Metadata, Viewport } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = '0xBen Full Stack Developer | 全栈开发工程师';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | nextarter-chakra' },
  description:
    'Full Stack Developer, freelance projects, APP development, website construction, mini-program development, H5 development | 全栈开发工程师，接单，APP开发，网站建设，小程序开发、H5开发',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e8e8e8',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden' }}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
