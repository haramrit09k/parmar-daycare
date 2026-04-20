import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import PipChat from '@/components/PipChat';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bloom Holistic Academy — Rooted in Nature, Growing for the Future',
  description:
    'A nature-immersive daycare with invisible AI. Nine unique rooms. Holistic curriculum. Opening October 2026.',
  openGraph: {
    title: 'Bloom Holistic Academy',
    description: 'Rooted in Nature. Growing for the Future.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CustomCursor />
        <PipChat />
      </body>
    </html>
  );
}
