import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { COMPANY_NAME, COMPANY_DESCRIPTION, SITE_URL } from '@/lib/constants';
import { BackToTop } from '@/components/ui/back-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} - 工业过滤技术专家`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: ['过滤技术', '工业过滤', '自清洗过滤器', '过滤系统', '过滤元件', '河北斯洛特'],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: SITE_URL,
    title: `${COMPANY_NAME} - 工业过滤技术专家`,
    description: COMPANY_DESCRIPTION,
    siteName: COMPANY_NAME,
    images: [
      {
        url: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} - 工业过滤技术专家`,
    description: COMPANY_DESCRIPTION,
    images: [
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
