import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Home | Matchanaa',
  description: 'My Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${jetBrainsMono.className} mx-auto flex h-screen w-full max-w-[800px] items-center px-4 antialiased lg:px-0`}
      >
        <div className='h-[356px] max-h-[345px] overflow-y-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
