import './globals.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Chivo_Mono, Space_Grotesk } from 'next/font/google';

const mono = Chivo_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://apriltao.vercel.app/'),
  title: {
    template: '%s | April Tao',
    default: 'April Tao',
  },
  description: 'Web developer and designer',
  keywords: [
    'web developer',
    'web designer',
    'fullstack web developer',
    'portfolio',
    'react',
    'next.js',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${mono.variable} ${sans.variable}`}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
