import DividerHorizontal from '../divider-horizontal';
import HamburgerMenu from './components/hamburgerMenu';
import MobileLinkButtons from './components/hamburgerMenu/components/mobile-link-buttons';
import MobileNavigation from './components/hamburgerMenu/components/mobile-navigation';
import LinkButtons from './components/linkButtons';
import Navigation from './components/navigation';
import Title from './components/title';

const Header = async () => {
  // const userAuth = await getUserAuth();
  // const isAdmin = userAuth?.data?.role[0].authority === 'ROLE_ADMIN';

  return (
    <header className="text-large flex h-28 min-w-[32rem] flex-wrap items-center justify-between px-8 md:justify-around">
      <Title />
      <Navigation isAdmin={true} />
      <LinkButtons />
      <HamburgerMenu>
        <div className="text-medium absolute right-0 top-[7rem] z-10 flex flex-col border bg-white font-medium md:hidden">
          <MobileNavigation />
          <DividerHorizontal />
          <MobileLinkButtons />
        </div>
      </HamburgerMenu>
    </header>
  );
};

export default Header;
