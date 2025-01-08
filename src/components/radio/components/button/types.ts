import { InputHTMLAttributes } from 'react';

export interface IRadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
}
