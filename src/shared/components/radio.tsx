import { twMerge } from 'tailwind-merge';

import { HTMLAttributes, InputHTMLAttributes } from 'react';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  valueList: string;
  optionList: string[];
  labelClassName?: string;
  inputClassName?: string;
}

const Radio = ({
  name,
  valueList,
  optionList,
  labelClassName,
  inputClassName,
  ...rest
}: IRadioProps) => {
  const labelClass = twMerge(`flex gap-2 ${labelClassName}`);

  return optionList.map((option, idx) => (
    <label className={labelClass}>
      <input
        type="radio"
        name={name}
        value={valueList[idx]}
        className={inputClassName}
        {...rest}
      />
      {option}
    </label>
  ));
};

export default Radio;
