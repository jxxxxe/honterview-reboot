'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

import { IProps } from './types';
/**
 * @brief Select 컴포넌트
 * @description
 * @param value
 * @param options String List
 * @param className tailwind 요소
 */

const Select = ({ value, options, className, ...props }: IProps) => {
  return (
    <select
      value={value}
      className={twMerge(
        `inline-flex cursor-pointer rounded-lg border border-primaries-primary bg-text-20 px-[1rem] py-[1.2rem] text-left text-[1.6rem] text-text-80 outline-none ${className}`,
      )}
      {...props}
    >
      {options.map((option) => (
        <option
          key={uuidv4()}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
