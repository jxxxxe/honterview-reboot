'use client';

import { twMerge } from 'tailwind-merge';

import { PaginationProvider } from './contexts';
import NextButton from './next-button';
import PageButtons from './page-buttons';
import PrevButton from './prev-button';
import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  defaultPage: number;
  limit: number;
  total: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({
  defaultPage,
  limit,
  total,
  onPageChange,
  children,
  ...rest
}: IProps) => {
  const style = twMerge(`flex gap-6 text-large ${rest.className}`);

  return (
    <PaginationProvider
      defaultPage={defaultPage}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    >
      <div className={style}>{children}</div>
    </PaginationProvider>
  );
};

Pagination.PrevButton = PrevButton;
Pagination.NextButton = NextButton;
Pagination.PageButtons = PageButtons;

export default Pagination;
