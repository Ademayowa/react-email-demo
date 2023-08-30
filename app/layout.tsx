import ClientProvider from '@/components/ClientProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sending Emails With Resend',
  description: 'Send emails with the Resend SDK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#DAEBFB]`}>
        <ClientProvider />
        <> {children}</>
      </body>
    </html>
  );
}
