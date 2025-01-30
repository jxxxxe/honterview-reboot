'use client';

import Button, { ButtonType } from '@/shared/components/button';
import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { redirect } from 'next/navigation';

const CompleteRecordButton = () => {
  // const {firstQuestion} = usePresettingDataStore()
  const firstQuestion = { id: 1 };
  const { answerList, questionList, answerTimeList, resetInterviewData } =
    useInterviewQuestionAnswerStore();

  const finishInterview = async () => {
    const interviewId = await apiFetch('api/interview/record', {
      method: 'POST',
      body: JSON.stringify({
        questionList,
        answerList,
        userId: TEMPORARY_USER_ID,
        firstQuestionId: firstQuestion.id,
        timerList: answerTimeList,
      }),
    });

    resetInterviewData();

    redirect(`/interview/result/${interviewId}`);
  };

  return (
    <Button
      styleType={ButtonType.Type2}
      onClick={finishInterview}
    >
      면접 종료
    </Button>
  );
};

export default CompleteRecordButton;
