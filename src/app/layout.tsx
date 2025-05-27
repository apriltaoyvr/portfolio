import './globals.css';
import { VercelToolbar } from '@vercel/toolbar/next';
import { Chivo_Mono, Space_Grotesk } from 'next/font/google';
import Providers from './providers';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

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
  openGraph: {
    type: 'website',
    siteName: 'April Tao',
    url: 'https://apriltao.vercel.app/',
    images: ['https://apriltao.vercel.app/api/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${mono.variable} ${sans.variable} min-h-screen font-sans md:p-8`}
      >
        <Providers>
          <div className='bg-background/90 md:shadow-xl md:rounded-xl'>
            <Navbar />
            <main className='flex flex-col flex-wrap min-h-screen md:min-h-[90dvh] md:max-h-[90dvh] gap-4 overflow-auto p-4 py-8 md:p-8 text-pretty justify-center-safe items-center-safe'>
              {children}
            </main>
          </div>
          {shouldInjectToolbar && <VercelToolbar />}
        </Providers>
      </body>
    </html>
  );
}
