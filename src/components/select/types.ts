import { SelectHTMLAttributes } from 'react';

export interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  options: string[];
  className?: string;
}
