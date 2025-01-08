'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

import { InputType, IProps } from './types';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

/**
 * @brief Input-Container
 * @description 입력 요소를 감싸는 컨테이너 역할, 입력 요소와 스타일을 적용가능
 * @param children 입력 요소 (default, succeess, error)
 * @param className tailwind 요소
 */

const Container = ({
  className,
  styleType = InputType.Type1,
  children,
  ...props
}: IProps) => {
  const baseStyle = `h-[5rem] w-[35rem] relative flex items-center justify-between rounded-lg border p-4 ${className}`;

  // 각 인풋 타입에 따른 추가 스타일
  const typeStyles = {
    default: 'focus-within:border-primaries-primary',
    succeess: 'focus-within:border-primaries-primary',
    error: 'border-[#C20000]',
  };

  const inputClass = twMerge(`${typeStyles[styleType]} ${baseStyle}`);

  return (
    <div
      className={inputClass}
      {...props}
    >
      {children}
      {styleType === InputType.Type2 && (
        <div className="flex-shrink-0 pl-2">
          <CheckCircleIcon />
        </div>
      )}
      {styleType === InputType.Type3 && (
        <div className="flex-shrink-0 pl-2">
          <ExclamationTriangleIcon />
        </div>
      )}
    </div>
  );
};

export default Container;
