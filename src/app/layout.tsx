import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SelectPages from '@/components/ui/selectPages';

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
        className={`${jetBrainsMono.className} flex h-screen items-center justify-center bg-blackCustom text-sm text-whiteCustom antialiased`}
      >
        <div className='relative mx-auto w-full max-w-[800px] border border-lighterBackground py-4'>
          <div className='absolute -left-10 -top-10 hidden h-10 w-10 border-b border-r border-lighterBackground lg:block'></div>
          <div className='absolute -right-10 -top-10 hidden h-10 w-10 border-b border-l border-lighterBackground lg:block'></div>
          <div className='absolute -bottom-10 -left-10 hidden h-10 w-10 border-r border-t border-lighterBackground lg:block'></div>
          <div className='absolute -bottom-10 -right-10 hidden h-10 w-10 border-l border-t border-lighterBackground lg:block'></div>
          <div className='mb-6 border-b border-lighterBackground px-4 pb-4'>
            <SelectPages />
          </div>
          <div className='mx-auto h-[356px] max-h-[356px] overflow-y-auto px-4'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
