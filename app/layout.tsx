import type { Metadata } from 'next'
import {Open_Sans} from 'next/font/google'
import { Header } from './components/Header'
import './globals.css'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Cake Bakery',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${open_sans.className} antialiased bg-white-default`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
