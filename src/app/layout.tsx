import '@/styles/globals.css';

import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';

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
      <body className="h-screen">
        <ToastContainer />
        <main className="wrap">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
