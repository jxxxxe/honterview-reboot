import { twMerge } from 'tailwind-merge';

export interface DividerVerticalProps {
  className?: string;
}

const DividerVertical = ({ className }: DividerVerticalProps) => {
  const style = twMerge(
    `w-[0.05rem] inline-block max-h-[100vh-9rem-7rem] self-stretch border-t-0 bg-neutral-400 opacity-100 dark:opacity-50 ${className} `,
  );
  return <div className={style} />;
};

export default DividerVertical;
