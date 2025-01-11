import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputIconProps {
  className?: string;
  children: ReactNode;
  isButton?: boolean;
}

const InputIcon = ({
  className,
  children,
  isButton = true,
}: InputIconProps) => {
  const style = twMerge(
    `absolute right-3 top-1/2 -translate-y-1/2 ${className}`,
  );
  return isButton ? (
    <button className={style}>{children}</button>
  ) : (
    <div className={style}>{children}</div>
  );
};

export default InputIcon;
