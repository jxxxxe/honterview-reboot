'use client';

import { IAnswer } from '@/shared/types/answer';
import { useId, useState } from 'react';

interface AnswerVisibilityToggleProps {
  answerData: IAnswer;
}

const AnswerVisibilityToggle = ({
  answerData,
}: AnswerVisibilityToggleProps) => {
  const defaultOn = false;
  const [isOn, setIsOn] = useState(defaultOn);
  const id = useId();

  const handleClick = () => {
    const newValue = !isOn;
    setIsOn(newValue);

    // if (onChange) {
    //   onChange({ newValue, id });
    // }
  };

  const switchBaseClass =
    'h-11 w-20 after:h-9 after:w-9 rounded-full border border-text-40 bg-text-20 after:absolute after:start-[2px] after:top-[2px] after:bg-text-40 after:rounded-full after:transition-all ';
  const switchActiveClass =
    'peer-checked:border-primaries-hover peer-checked:bg-primaries-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:bg-text-20';
  const switchFocusClass = 'peer-focus:outline-none';
  const switchDisabledClass =
    'peer-disabled:bg-text-40 peer-disabled:after:bg-text-60';

  const combinedSwitchClass = `${switchBaseClass} ${switchActiveClass} ${switchFocusClass} ${switchDisabledClass}`;

  return (
    <label
      htmlFor={id}
      className={`relative inline-flex w-fit cursor-pointer items-center`}
    >
      <input
        id={id}
        onChange={handleClick}
        checked={isOn}
        // disabled={disabled}
        type="checkbox"
        className="peer sr-only"
      />
      <div className={combinedSwitchClass} />
    </label>
  );
};

export default AnswerVisibilityToggle;
