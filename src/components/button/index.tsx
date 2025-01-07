'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

import { ButtonType, IProps } from './types';

export { ButtonType } from './types';

/**
 * @brief Button 컴포넌트
 * @description children 필수, defalut = primary
 * @param children
 * @param styleType
 * @param className tailwind 요소
 */

const Button = ({
  children,
  styleType = ButtonType.Type1,
  className,
  ...props
}: IProps) => {
  const baseStyle = `text-[1.6rem] px-[5rem] py-[1.2rem] inline-flex items-center justify-center rounded-lg border`;

  // 각 버튼 타입에 따른 추가 스타일
  const typeStyles = {
    primary: {
      base: 'bg-primaries-primary border-primaries-primary text-text-20',
      hover: 'hover:bg-primaries-hover hover:border-primaries-hover',
      active: 'active:bg-primaries-active active:border-primaries-active',
      disabled:
        'disabled:bg-text-40 disabled:text-text-20 disabled:text-opacity-50 disabled:border-text-40',
    },
    primaryAlternate: {
      base: 'bg-text-20 border-primaries-primary text-primaries-primary',
      hover: 'hover:text-primaries-hover hover:border-primaries-hover',
      active: 'active:text-primaries-active active:border-primaries-active',
      disabled: 'disabled:text-text-40 disabled:border-text-40',
    },
    secondary: {
      base: 'bg-secondary-primary border-secondary-primary text-text-20',
      hover: 'hover:bg-secondary-hover hover:border-secondary-hover',
      active: 'active:bg-secondary-active active:border-secondary-active',
      disabled:
        'disabled:bg-text-40 disabled:text-text-20 disabled:text-opacity-50 disabled:border-text-40',
    },
    secondaryAlternate: {
      base: 'bg-text-20 border-secondary-primary text-secondary-primary',
      hover: 'hover:text-secondary-hover hover:border-secondary-hover',
      active: 'active:text-secondary-active active:border-secondary-active',
      disabled: 'disabled:text-text-40 disabled:border-text-40',
    },
  };

  const buttonClass = twMerge(
    `${baseStyle} ${Object.values(typeStyles[styleType]).join(' ')} ${className}`,
  );

  return (
    <button
      type="button"
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
