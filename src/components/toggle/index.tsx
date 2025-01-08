'use client';

import React, { useId, useState } from 'react';

import { IToggle } from './types';

/**
 * @brief 토글 컴포넌트
 * @param labelText 토글 오른쪽 보여지는 이름
 * @param onChange toggle의 상태값을 넘겨주는 콜백 함수
 * @param defaultOn 초기 토글 상태
 * @param disabled 토글 disabled 상태
 */
const Toggle = ({
  onChange,
  defaultOn = false,
  disabled = false,
  className,
}: IToggle) => {
  const [isOn, setIsOn] = useState(defaultOn);
  const id = useId();

  const handleClick = () => {
    const newValue = !isOn;
    setIsOn(newValue);

    if (onChange) {
      onChange({ newValue, id });
    }
  };

  const switchBaseClass =
    "h-6 w-11 rounded-full border border-text-40 bg-text-20 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:bg-text-40 after:rounded-full after:transition-all after:content-['']";
  const switchActiveClass =
    'peer-checked:border-primaries-hover peer-checked:bg-primaries-primary peer-checked:after:translate-x-full peer-checked:after:bg-text-20';
  const switchFocusClass = 'peer-focus:outline-none';
  const switchDisabledClass =
    'peer-disabled:bg-text-40 peer-disabled:after:bg-text-60';

  const combinedSwitchClass = `${switchBaseClass} ${switchActiveClass} ${switchFocusClass} ${switchDisabledClass} ${className}`;

  return (
    <label
      htmlFor={id}
      className="relative inline-flex w-fit cursor-pointer items-center"
    >
      <input
        id={id}
        onChange={handleClick}
        checked={isOn}
        disabled={disabled}
        type="checkbox"
        className="peer sr-only"
      />
      <div className={combinedSwitchClass} />
    </label>
  );
};

export default Toggle;
