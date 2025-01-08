import { ReactNode } from 'react';

export interface IRadioContext {
  id: string;
}

export interface IRadioProviderProps {
  id: string;
  children: ReactNode;
}
