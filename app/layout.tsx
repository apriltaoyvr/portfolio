import Providers from './providers';
import Navbar from '../components/Navbar/index';
import { Inter, Space_Grotesk } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
const sg = Space_Grotesk({
  subsets: ['latin'],
});

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={sg.className + ' dark:bg-black'}>
        <Providers> <Navbar/> {children}</Providers>
      </body>
    </html>
  );
}
