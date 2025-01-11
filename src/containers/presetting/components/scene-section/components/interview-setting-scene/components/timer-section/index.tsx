import { useState } from 'react';

import SectionAnimationWrapper from '../../../section-animation-wrapper';
import TimePicker from './components/time-picker';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';

export const minuteData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const secondData = [0, 10, 20, 30, 40, 50];

export interface TimerSectionProps {
  isVisible: boolean;
}

const TimerSection = ({ isVisible }: TimerSectionProps) => {
  const { setTimeMinute, setTimeSecond, answerTime } = usePresettingDataStore();
  const [isSecondDisabled, setIsSecondDisabled] = useState(
    answerTime.minute === minuteData[minuteData.length - 1],
  );

  const handleMinuteChange = (newMinute: number) => {
    setTimeMinute(newMinute);
    if (newMinute === minuteData[minuteData.length - 1]) {
      setIsSecondDisabled(true);
      setTimeSecond(0);
      return;
    }
    setIsSecondDisabled(false);
  };

  if (!isVisible) {
    return;
  }

  return (
    <SectionAnimationWrapper>
      <h1 className="text-large font-semibold">질문당 답변 시간</h1>
      <p className="mb-[1rem] w-[30rem] text-extraSmall text-text-60">
        한 질문당 답변 제한 시간을 선택해주세요 (최대 10분)
      </p>
      <div className="inline-flex w-[13rem] select-none items-center justify-center gap-[1rem] rounded-xl bg-white py-[1rem] shadow">
        <TimePicker
          type="minute"
          timeRange={minuteData}
          onChange={(minute: number) => handleMinuteChange(minute)}
          index={minuteData.indexOf(answerTime.minute)}
        />
        <div className="text-large text-text-80">:</div>
        <TimePicker
          type="second"
          timeRange={secondData}
          onChange={(second: number) => setTimeSecond(second)}
          index={secondData.indexOf(answerTime.second)}
          isArrowDisabled={isSecondDisabled}
        />
      </div>
    </SectionAnimationWrapper>
  );
};

export default TimerSection;
