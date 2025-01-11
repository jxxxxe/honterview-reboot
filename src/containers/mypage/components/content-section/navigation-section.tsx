interface NavigationSectionProps {
  activeMenu: 'result' | 'bookmark';
  onClick: (menu: 'result' | 'bookmark') => void;
}

const NavigationSection = ({ activeMenu, onClick }: NavigationSectionProps) => {
  const isResultActive = activeMenu === 'result';

  return (
    <nav className="flex w-screen justify-center gap-[5rem] pb-[2rem] text-[1.7rem] tablet:w-[50rem] tablet:gap-[10rem] tablet:pb-[2rem] tablet:text-[2rem]">
      <button
        type="button"
        className={`${!isResultActive ? 'font-medium text-primaries-primary underline underline-offset-[0.57rem]' : 'text-text-60'}`}
        onClick={() => onClick('bookmark')}
      >
        북마크한 질문
      </button>
      <button
        type="button"
        className={`${isResultActive ? 'font-medium text-primaries-primary underline underline-offset-[0.7rem]' : 'text-text-60'}`}
        onClick={() => onClick('result')}
      >
        연습 기록
      </button>
    </nav>
  );
};

export default NavigationSection;
