import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
}
