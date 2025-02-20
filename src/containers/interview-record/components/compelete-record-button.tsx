'use client';

import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { createVideoFormData } from '@/shared/utils/video';
import { PowerIcon } from '@heroicons/react/24/outline';
import { redirect } from 'next/navigation';

const CompleteRecordButton = () => {
  const { addAnswer, questionList, answerList, answerTimeList, videoChuncks } =
    useInterviewQuestionAnswerStore();

  const { firstQuestion } = usePresettingDataStore();
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

  return (
    <button
      className="hover:text-primaries-primary"
      onClick={completeInterview}
    >
      <PowerIcon />
      면접 종료
    </button>
  );
};

export default CompleteRecordButton;
