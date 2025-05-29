import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Noto_Serif_TC, Noto_Sans_TC, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const notoSerif = Noto_Serif_TC({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
});

const notoSans = Noto_Sans_TC({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Windows to elsewhere | 個人品牌網站',
  description: '行銷人 | 旅外生活家 | 自我成長實踐者',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-TW" className={`${notoSans.className} ${playfair.variable} ${notoSerif.variable} ${notoSans.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
} 