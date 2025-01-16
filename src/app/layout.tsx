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
        className={`${jetBrainsMono.className} flex h-screen items-center justify-center bg-blackCustom text-whiteCustom`}
      >
        <div className='mx-auto w-full max-w-[800px] px-4 lg:px-0'>
          <div className='mb-6'>
            <SelectPages />
          </div>
          <div className='mx-auto h-[356px] max-h-[356px] overflow-y-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
