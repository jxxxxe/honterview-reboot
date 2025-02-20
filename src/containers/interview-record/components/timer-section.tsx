'use client';

import { completeInterview } from '@/shared/services/record-interview/complete-interview';
import { createNewQuestion } from '@/shared/services/record-interview/create-openai-quetion';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { useEffect, useState } from 'react';

const TimerSection = () => {
  const { answerTime, questionCount } = usePresettingDataStore();
  const answerSecond = answerTime.minute * 60 + answerTime.second;
  const [leftSecond, setLeftSecond] = useState(answerSecond);
  const { addAnswerTime, currentQuestion, createdQuestionCount, answerList } =
    useInterviewQuestionAnswerStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftSecond((prev) => prev - 0.1);
    }, 100);

    if (leftSecond <= 0) {
      if (createdQuestionCount >= questionCount) {
        completeInterview();
      } else {
        createNewQuestion();
      }

      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [leftSecond]);

  useEffect(() => {
    if (answerList.length > 0) {
      addAnswerTime(answerSecond - leftSecond);
    }
  }, [answerList]);

  useEffect(() => {
    setLeftSecond(answerSecond);
  }, [currentQuestion]);

  return (
    <div className="h-3 w-full bg-gray-200">
      <div
        className="h-full bg-primaries-primary transition-all"
        style={{ width: `${(leftSecond / answerSecond) * 100}%` }}
      />
    </div>
  );
};

export default TimerSection;
