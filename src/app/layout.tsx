import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rachie Simoni | 🩷',
  description: 'An resume and contact info website for Rachie Simoni',
  applicationName: 'Rachie&apos;s Resume',
  authors: {
    name: 'Tyler Simoni',
    url: 'https://tylersimoni.com',
  },
  keywords: [
    'rachie simoni',
    'simoni',
    'react',
    'next13',
    'tailwindcss',
    'sanity-io',
    'resume',
    'framer-motion',
  ],
  // themeColor: [
  //   {
  //     media: '(prefers-color-scheme: dark)',
  //     color: '#1e293b',
  //   },
  //   {
  //     media: '(prefers-color-scheme: light)',
  //     color: '#f1f5f9',
  //   },
  // ],
  // colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-gradient-to-b from-pink-400 to-pink-500 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
