'use client';

import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { createVideoFormData } from '@/shared/utils/video';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export const completeInterview = () => {
  const {
    addAnswer,
    questionList,
    answerList,
    answerTimeList,
    resetInterviewData,
    videoChuncks,
  } = useInterviewQuestionAnswerStore();

  const { firstQuestion } = usePresettingDataStore();
  const videoFormData = createVideoFormData(videoChuncks);

  useEffect(() => {
    const onComplete = async () => {
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

      resetInterviewData();

      redirect(`/interview/result/${interviewId}`);
    };

    onComplete();
  }, []);
};
