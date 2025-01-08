'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from './types';

/**
 * @brief Tag 컴포넌트
 * @description style 추가 수정 가능
 * @param children
 * @param className tailwind 요소
 */

const Tag = ({ children, className, ...props }: IProps) => {
  return (
    <div
      className={twMerge(
        `inline-flex items-center justify-center gap-1 rounded-lg border-primaries-primary bg-primaries-primary px-[12px] py-[5px] text-[1.6rem] text-text-20 hover:bg-primaries-hover active:bg-primaries-active ${className}`,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
