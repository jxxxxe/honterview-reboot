import '@/styles/globals.css';

import Header from '@/shared/components/header';

const HeaderLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="wrap">
      <Header />
      {children}
    </div>
  );
};

export default HeaderLayout;
