import { ReactNode } from 'react';

export interface IPaginationContext {
  currentPage: number;
  totalPages: number;
  isFirstNumbers: boolean;
  isLastNumbers: boolean;
  handleSelectPage: (newPage: number) => void;
  handleMovePrevPage: () => void;
  handleMoveNextPage: () => void;
  createPageButtons: (className?: string) => ReactNode;
}

export interface IPaginationProviderProps {
  defaultPage: number;
  itemCountOnPage: number;
  totalItemCount: number;
  onPageChange: (newPage: number) => void;
  children: ReactNode;
}
