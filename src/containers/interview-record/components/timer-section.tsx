'use client';

import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import { completeInterview } from '@/shared/services/interview/complete-interview';
import { createNewQuestion } from '@/shared/services/interview/openai';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { createVideoFormData } from '@/shared/utils/video';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const TimerSection = () => {
  // const { answerTime,firstQuestionTagList,questionCount } = usePresettingDataStore();
  const questionCount = 5;
  const answerTime = { minute: 9, second: 30 };
  const answerSecond = answerTime.minute * 60 + answerTime.second;
  const [leftSecond, setLeftSecond] = useState(answerSecond);
  const {
    addAnswerTime,
    currentQuestion,
    addQuestion,
    questionList,
    createdQuestionCount,
    answerList,
    answerTimeList,
    resetInterviewData,
    videoChuncks,
  } = useInterviewQuestionAnswerStore();
  // const {firstQuestion} = usePresettingDataStore()
  const firstQuestion = { id: 1 };

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftSecond((prev) => prev - 0.1);
    }, 100);

    if (leftSecond <= 0) {
      if (createdQuestionCount >= questionCount) {
        const videoFormData = createVideoFormData(videoChuncks);

        completeInterview(
          questionList,
          answerList,
          TEMPORARY_USER_ID,
          firstQuestion.id,
          answerTimeList,
          videoFormData,
          (interviewId) => {
            resetInterviewData();

            redirect(`/interview/result/${interviewId}`);
          },
        );
      } else {
        createNewQuestion(
          // firstQuestionTagList.map((tag) => tag.name),
          ['프론트엔드'],
          addQuestion,
          questionList,
        );
      }

      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [leftSecond]);

  useEffect(() => {
    if (answerList.length > 1) {
      addAnswerTime(answerSecond - leftSecond);
    }
  }, [answerList.length]);

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
