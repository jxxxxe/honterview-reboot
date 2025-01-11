import React, { InputHTMLAttributes } from 'react';

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const baseStyle = `min-w-full text-[1.6rem] placeholder-text-40 outline-none focus-within:border-primaries-primary flex items-center justify-between rounded-lg border p-4 ${className}`;

  return (
    <input
      className={baseStyle}
      {...props}
    />
  );
};

export default Input;
