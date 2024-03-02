import './globals.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const grotesque = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apriltao.vercel.app/"),
  title: {
    template: '%s | April Tao',
    default: 'April Tao',
  },
  description: 'Web developer and designer',
  keywords: ['web developer', 'web designer', 'fullstack web developer', 'portfolio', 'react', 'next.js'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} ${grotesque.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
