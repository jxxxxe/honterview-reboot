import '@/styles/globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';

import Header from '@/components/header';

const font = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      lang="ko"
      className={font.className}
    >
      <body>
        <ToastContainer />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
