import MainSectionAnimationWrapper from './animation-wrapper/main-section-animation-wrapper';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

const MainIntroSection = () => {
  return (
    <div className="bg-gradient bg-gradient-to-b from-white to-blue-100">
      <MainSectionAnimationWrapper className="main-section-intro wrap flex flex-col items-center justify-center p-[2rem] text-[4.4rem] tablet:text-[6rem]">
        <h2 className="flex flex-col justify-center font-bold xl:flex-row xl:gap-[1rem]">
          <p>
            <span className="text-primaries-primary">예상 질문</span>부터
          </p>
          <p>
            <span className="text-primaries-primary">모의 면접</span>까지
          </p>
        </h2>
        <h2 className="flex w-full justify-center font-bold">
          개발 면접의 모든 것
        </h2>
        <p className="font-GoldenPlains text-[8rem] xl:text-[9rem]">
          Honterview
        </p>
        <ChevronDoubleDownIcon className="absolute bottom-[2rem] size-14 animate-bounce" />
      </MainSectionAnimationWrapper>
    </div>
  );
};

export default MainIntroSection;
