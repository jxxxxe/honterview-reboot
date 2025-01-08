import DividerHorizontal from '../divider-horizontal';
import HamburgerMenu from './components/hamburger-menu';
import MobileLinkButtons from './components/hamburger-menu/components/mobile-link-buttons';
import MobileNavigation from './components/hamburger-menu/components/mobile-navigation';
import LinkButtons from './components/link-buttons';
import Navigation from './components/navigation';
import Title from './components/title';

const Header = async () => {
  // const userAuth = await getUserAuth();
  // const isAdmin = userAuth?.data?.role[0].authority === 'ROLE_ADMIN';

  return (
    <header className="flex h-28 min-w-[32rem] flex-wrap items-center justify-between px-8 text-large md:justify-around">
      <Title />
      <Navigation />
      <LinkButtons />
      <HamburgerMenu>
        <div className="absolute right-0 top-[7rem] z-10 flex flex-col border bg-white text-medium font-medium md:hidden">
          <MobileNavigation />
          <DividerHorizontal />
          <MobileLinkButtons />
        </div>
      </HamburgerMenu>
    </header>
  );
};

export default Header;
