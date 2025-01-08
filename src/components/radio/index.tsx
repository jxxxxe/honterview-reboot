import { twMerge } from 'tailwind-merge';

import RadioButton from './components/button';
import RadioButtonLabel from './components/label';
import { RadioProvider } from './contexts';
import { IRadioProps } from './types';

const Radio = ({ id, children, ...rest }: IRadioProps) => {
  const style = twMerge(`flex gap-2 ${rest.className}`);

  return (
    <RadioProvider id={id}>
      <div className={style}>{children}</div>
    </RadioProvider>
  );
};

Radio.Label = RadioButtonLabel;
Radio.Button = RadioButton;

export default Radio;
