'use client';

import { useContext } from 'react';

import { RadioContext } from '../../contexts';
import { IRadioButtonProps } from './types';

const RadioButton = ({ name, value, ...rest }: IRadioButtonProps) => {
  const { id } = useContext(RadioContext);

  return (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      {...rest}
    />
  );
};

export default RadioButton;
