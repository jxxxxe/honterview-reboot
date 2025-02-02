'use client';

import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import { completeInterview } from '@/shared/services/interview/complete-interview';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { createVideoFormData } from '@/shared/utils/video';
import { PowerIcon } from '@heroicons/react/24/outline';
import { redirect } from 'next/navigation';

const CompleteRecordButton = () => {
  // const {firstQuestion} = usePresettingDataStore()
  const firstQuestion = { id: 1 };
  const {
    answerList,
    questionList,
    answerTimeList,
    resetInterviewData,
    videoChuncks,
  } = useInterviewQuestionAnswerStore();

  const finishInterview = async () => {
    const videoFormData = createVideoFormData(videoChuncks);

    await completeInterview(
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
  };

  return (
    <button
      className="hover:text-primaries-primary"
      onClick={finishInterview}
    >
      <PowerIcon />
      면접 종료
    </button>
  );
};

export default CompleteRecordButton;
