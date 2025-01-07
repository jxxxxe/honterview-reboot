import Image from 'next/image';

import { ScreenShotsScreensProps } from './type';

const ScreenShotsScreens = ({
  imageSrc,
  imageTitle,
  children: titleChildren,
}: ScreenShotsScreensProps) => {
  return (
    <div className="main-section flex h-screen w-screen flex-col items-center justify-center gap-[5rem] xl:flex-row xl:gap-[3rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-[1rem] text-text-60 tablet:text-[1.4rem]">
          {imageTitle}
        </p>
        <Image
          src={imageSrc}
          alt=""
          className="w-[35rem] tablet:w-[60rem] xl:w-[70rem]"
        />
      </div>
      <div className="flex flex-col text-[3rem] font-bold tablet:text-[4rem]">
        {titleChildren}
      </div>
    </div>
  );
};

export default ScreenShotsScreens;
