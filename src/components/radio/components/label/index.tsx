'use client';

import { useContext } from 'react';

import { RadioContext } from '../../contexts';
import { IRadioButtonLabelProps } from './types';

const RadioButtonLabel = ({ children, ...rest }: IRadioButtonLabelProps) => {
  const { id } = useContext(RadioContext);

  return (
    <label
      htmlFor={id}
      {...rest}
    >
      {children}
    </label>
  );
};

export default RadioButtonLabel;
