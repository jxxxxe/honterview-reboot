import Title from './components/title';

const Header = async () => {
  return (
    <header className="text-large flex h-28 min-w-[32rem] flex-wrap items-center justify-between px-8 md:justify-around">
      <Title />
    </header>
  );
};

export default Header;
