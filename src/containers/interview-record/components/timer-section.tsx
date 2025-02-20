'use client';

import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { createVideoFormData } from '@/shared/utils/video';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const TimerSection = () => {
  const { answerTime, questionCount, firstQuestionTagList, firstQuestion } =
    usePresettingDataStore();
  const answerSecond = answerTime.minute * 60 + answerTime.second;
  const [leftSecond, setLeftSecond] = useState(answerSecond);
  const {
    addAnswerTime,
    currentQuestion,
    createdQuestionCount,
    answerList,
    addAnswer,
    questionList,
    answerTimeList,
    videoChuncks,
    addQuestion,
  } = useInterviewQuestionAnswerStore();

  const videoFormData = createVideoFormData(videoChuncks);

  const completeInterview = async () => {
    addAnswer();

    const { interviewId } = await apiFetch('api/interview/record', {
      method: 'POST',
      body: JSON.stringify({
        questionList,
        answerList,
        userId: TEMPORARY_USER_ID,
        firstQuestionId: firstQuestion.id,
        timerList: answerTimeList,
      }),
    });

    await apiFetch(`api/interview/record/${interviewId}/video`, {
      method: 'POST',
      body: videoFormData,
    });

    redirect(`/interview/result/${interviewId}`);
  };

  const createNewQuestion = async () => {
    addAnswer();

    const newQuestion = await apiFetch('api/interview/openai/question', {
      method: 'POST',
      body: JSON.stringify({
        questionCategoryList: firstQuestionTagList.map((tag) => tag.name),
        prevQuestion: currentQuestion,
        prevResponse: answerList?.at(answerList.length - 1),
      }),
    });

    addQuestion(newQuestion?.reply);
  };

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
