import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonType {
  Type1 = 'primary',
  Type2 = 'primaryAlternate',
  Type3 = 'secondary',
  Type4 = 'secondaryAlternate',
}
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styleType?: ButtonType;
  className?: string;
}
