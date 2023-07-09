import './globals.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | April Tao',
    default: 'April Tao'
  },
  description: 'Web developer and designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Providers>
          <Navbar /> 
          {children}
        </Providers>
      </body>
    </html>
  );
}
