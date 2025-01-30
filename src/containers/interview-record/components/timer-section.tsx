'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { useEffect, useState } from 'react';

const TimerSection = () => {
  const { answerTime } = usePresettingDataStore();
  const answerSecond = answerTime.minute * 60 + answerTime.second;
  const [leftSecond, setLeftSecond] = useState(answerSecond);
  const { addAnswerTime, createdQuestionCount } =
    useInterviewQuestionAnswerStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftSecond((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [leftSecond]);

  useEffect(() => {
    addAnswerTime(leftSecond);
    setLeftSecond(answerSecond);
  }, [createdQuestionCount]);

  return (
    <div className="h-3 w-full rounded-lg bg-gray-200">
      <div
        className="h-3 rounded-lg bg-primaries-primary"
        style={{ width: `${(leftSecond / answerSecond) * 100}%` }}
      />
    </div>
  );
};

export default TimerSection;
