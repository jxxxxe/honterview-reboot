/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { createContext } from 'react';

import { IRadioContext, IRadioProviderProps } from './types';

export const RadioContext = createContext<IRadioContext>({
  id: '',
});

export const RadioProvider = ({ id, children }: IRadioProviderProps) => {
  return (
    <RadioContext.Provider value={{ id }}>{children}</RadioContext.Provider>
  );
};
