import DividerHorizontal from '../divider-horizontal';
import HamburgerMenu from './hamburger-menu';
import MobileAuthButtons from './hamburger-menu/mobile-auth-buttons';
import MobileInterviewButtons from './hamburger-menu/mobile-interview-buttons';
import AuthButtons from './auth-buttons';
import Navigation from './interview-buttons';
import Title from './title';

const Header = async () => {
  // const userAuth = await getUserAuth();
  // const isAdmin = userAuth?.data?.role[0].authority === 'ROLE_ADMIN';

  return (
    <header className="flex h-28 min-w-[32rem] flex-wrap items-center justify-between px-8 text-large md:justify-around">
      <Title />
      <Navigation />
      <AuthButtons />
      <HamburgerMenu>
        <div className="absolute right-0 top-[7rem] z-10 flex flex-col border bg-white text-medium font-medium md:hidden">
          <MobileInterviewButtons />
          <DividerHorizontal />
          <MobileAuthButtons />
        </div>
      </HamburgerMenu>
    </header>
  );
};

export default Header;
