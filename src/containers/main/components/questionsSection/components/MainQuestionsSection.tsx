import Image from 'next/image';

import { MainQuestionsSectionProps } from './type';

const MainQuestionsSection = ({
  children: chatBubbleChildren,
  imageSrc,
  title1,
  title2,
  title1Detail,
  imageTitle,
}: MainQuestionsSectionProps) => {
  return (
    <div className="h-full">
      <div className="relative flex h-full flex-col items-center justify-center gap-[3rem] p-[2rem] text-[3rem] xl:hidden xl:p-0">
        {chatBubbleChildren}
        <div className="z-20 flex flex-col gap-[0.5rem]">
          <p className="text-[1rem] text-text-60">{imageTitle}</p>
          <Image
            src={imageSrc}
            alt=""
            className="w-[50rem] shadow-xl backdrop-blur-xl"
          />
        </div>
        <div className="z-20 flex w-full flex-col items-center xl:text-[4rem]">
          <h2 className="font-bold">{title1}</h2>
          <h2 className="font-bold">{title2}</h2>
        </div>
      </div>

      <div className="relative hidden h-full items-center justify-center gap-[5rem] xl:flex">
        {chatBubbleChildren}
        <div>
          <h2 className="text-[5rem] font-bold">{title1}</h2>
          {title1Detail && <p className="text-text-40">{title1Detail}</p>}
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-small text-text-60">{imageTitle}</p>
          <Image
            src={imageSrc}
            alt=""
            className="w-[50rem] shadow-xl backdrop-blur-xl"
          />
        </div>
        <h2 className="text-[5rem] font-bold">{title2}</h2>
      </div>
    </div>
  );
};

export default MainQuestionsSection;
