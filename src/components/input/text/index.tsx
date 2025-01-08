'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from './types';

/**
 * @brief Input-Text
 * @description 입력 요소 역할, style 추가 수정 가능
 * @param className tailwind 요소
 */

const Text = ({ className, ...props }: IProps) => {
  return (
    <input
      className={twMerge(
        `w-full text-[1.6rem] placeholder-text-40 outline-none ${className}`,
      )}
      {...props}
    />
  );
};

export default Text;
