/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { createContext, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { IPaginationContext, IPaginationProviderProps } from './types';

export const PaginationContext = createContext<IPaginationContext>({
  currentPage: 0,
  totalPages: 0,
  isFirstNumbers: true,
  isLastNumbers: true,
  handleSelectPage: () => {},
  handleMovePrevPage: () => {},
  handleMoveNextPage: () => {},
  createPageButtons: () => {},
});

export const PaginationProvider = ({
  defaultPage,
  limit,
  total,
  onPageChange,
  children,
}: IPaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [isFirstNumbers, setIsFirstNumbers] = useState(true);
  const [isLastNumbers, setIsLastNumbers] = useState(true);
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    if (currentPage <= 10) {
      setIsFirstNumbers(true);
    } else {
      setIsFirstNumbers(false);
    }
    if (totalPages - currentPage < 10) {
      setIsLastNumbers(true);
    } else {
      setIsLastNumbers(false);
    }
  }, [currentPage]);

  const handleSelectPage = (newPage: number) => {
    onPageChange(newPage);
    setCurrentPage(newPage);
  };

  const handleMovePrevPage = () => {
    if (currentPage > 10) {
      const prevFirstPage = Math.floor((currentPage - 11) / 10) * 10 + 1;

      handleSelectPage(prevFirstPage);
    }
  };

  const handleMoveNextPage = () => {
    const nextFirstPage = Math.floor((currentPage + 9) / 10) * 10 + 1;

    if (nextFirstPage <= totalPages) {
      handleSelectPage(nextFirstPage);
    }
  };

  const createPageButtons = (className?: string) => {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
      .filter((page) => {
        const minPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
        const maxPage = minPage + 9;

        return page >= minPage && page <= maxPage;
      })
      .map((page) => {
        const style = twMerge(
          `min-w-[4.5rem] py-4 text-center w-10 rounded-[50%] hover:rounded-[50%] hover:bg-[#E6E8EA] ${currentPage === page && 'bg-[#E6E8EA] font-bold'} ${className}`,
        );

        return (
          <button
            type="button"
            key={page}
            onClick={() => handleSelectPage(page)}
            className={style}
          >
            {page}
          </button>
        );
      });
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        totalPages,
        isFirstNumbers,
        isLastNumbers,
        handleSelectPage,
        handleMoveNextPage,
        handleMovePrevPage,
        createPageButtons,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
