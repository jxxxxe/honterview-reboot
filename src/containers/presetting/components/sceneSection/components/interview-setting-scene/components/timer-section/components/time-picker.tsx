import { useState } from 'react';

import {
  ArrowDownPrimaryIcon,
  ArrowDownSecondaryIcon,
  ArrowUpPrimaryIcon,
  ArrowUpSecondaryIcon,
} from '@/components/icon';

export interface TimePickerProps {
  type: 'minute' | 'second';
  timeRange: number[];
  index: number;
  isArrowDisabled?: boolean;
  onChange: (num: number) => void;
}

const TimePicker = ({
  type,
  timeRange,
  index,
  isArrowDisabled,
  onChange,
}: TimePickerProps) => {
  const [isUpLimit, setIsUpLimit] = useState(timeRange.length - 1 === index);
  const [isDownLimit, setIsDownLimit] = useState(index === 0);

  const handleUpButton = () => {
    if (index + 1 === timeRange.length - 1) {
      setIsUpLimit(true);
    }
    onChange(timeRange[index + 1]);
    setIsDownLimit(false);
  };

  const handleDownButton = () => {
    if (index - 1 === 0) {
      setIsDownLimit(true);
    }
    onChange(timeRange[index - 1]);
    setIsUpLimit(false);
  };

  return (
    <div className="inline-flex flex-col items-center justify-around">
      <button
        type="button"
        className="flex items-center justify-center"
        onClick={handleUpButton}
        disabled={isUpLimit || isArrowDisabled}
      >
        {isUpLimit || isArrowDisabled ? (
          <ArrowUpSecondaryIcon />
        ) : (
          <ArrowUpPrimaryIcon />
        )}
      </button>
      <div className="flex w-[4rem] items-center justify-center text-medium text-zinc-700">
        {timeRange[index]}
        {type === 'minute' ? '분' : '초'}
      </div>
      <button
        type="button"
        className="flex w-[2.4rem] items-center justify-center"
        onClick={handleDownButton}
        disabled={isDownLimit || isArrowDisabled}
      >
        {isDownLimit || isArrowDisabled ? (
          <ArrowDownSecondaryIcon />
        ) : (
          <ArrowDownPrimaryIcon />
        )}
      </button>
    </div>
  );
};

export default TimePicker;
