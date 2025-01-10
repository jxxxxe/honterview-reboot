import React, { useEffect, useState } from 'react';

import CountSection from './components/count-section';
import InterviewTypeSection from './components/interview-type-section';
import TimerSection from './components/timer-section';
import useStepStore from '@/stores/presetting/useStepStore';
import usePresettingDataStore from '@/stores/presetting/usePresettingDataStore';

const InterviewSettingScene = () => {
  const { setNextButtonOn, setNextButtonOff } = useStepStore();
  const { questionCount, answerTime, interviewType } = usePresettingDataStore();
  const [isTypeVisible, setIsTypeVisible] = useState(!!questionCount);
  const [isTimeVisible, setIsTimeVisible] = useState(
    interviewType === 'RECORD',
  );

  useEffect(() => {
    const { minute, second } = answerTime;
    if (
      questionCount &&
      (interviewType === 'TEXT' || !(minute === 0 && second === 0))
    ) {
      setNextButtonOn();
      return;
    }
    setNextButtonOff();
  }, [
    answerTime,
    interviewType,
    questionCount,
    setNextButtonOff,
    setNextButtonOn,
  ]);

  return (
    <div className="flex h-full w-[19rem] flex-col justify-center gap-[4rem]">
      <div className="h-[8.8]">
        <CountSection setNextItemOn={() => setIsTypeVisible(true)} />
      </div>
      <div className="h-[9.5rem]">
        <InterviewTypeSection
          isVisible={isTypeVisible}
          setNextItemOn={(value) => setIsTimeVisible(value)}
        />
      </div>
      <div className="h-[14.7rem]">
        <TimerSection isVisible={isTimeVisible} />
      </div>
    </div>
  );
};

export default InterviewSettingScene;
