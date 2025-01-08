import { HTMLAttributes, ReactNode } from 'react';

export enum InputType {
  Type1 = 'default',
  Type2 = 'succeess',
  Type3 = 'error',
}
export interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  styleType?: InputType;
  className?: string;
}
