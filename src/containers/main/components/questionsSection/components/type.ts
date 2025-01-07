import { StaticImageData } from 'next/image';

export interface MainQuestionsSectionProps extends React.PropsWithChildren {
  imageSrc: StaticImageData;
  title1: string;
  title2: string;
  title1Detail?: string;
  imageTitle: string;
}
