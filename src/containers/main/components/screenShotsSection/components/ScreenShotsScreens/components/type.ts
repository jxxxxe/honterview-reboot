import { StaticImageData } from 'next/image';

export interface ScreenShotsScreensProps extends React.PropsWithChildren {
  imageSrc: StaticImageData;
  imageTitle: string;
}
