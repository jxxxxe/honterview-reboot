'use client';

import Button, { ButtonType } from '@/shared/components/button';
import { notify } from '@/shared/components/toast';
import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { redirect } from 'next/navigation';

const CompleteChatButton = () => {
  // const {firstQuestion} = usePresettingDataStore()
  const firstQuestion = { id: 1, name: 'react란 무엇인가요?' };
  const { answerList, questionList, resetInterviewData } =
    useInterviewQuestionAnswerStore();

  const finishInterview = async () => {
    if (!answerList.length) {
      return notify('warning', '첫 질문의 답변이 입력되지 않았습니다.');
    }
    const interviewId = await apiFetch('api/interview/chat', {
      method: 'POST',
      body: JSON.stringify({
        answerList,
        questionList,
        userId: TEMPORARY_USER_ID,
        firstQuestionId: firstQuestion.id,
      }),
    });

    resetInterviewData();

    redirect(`/interview/result/${interviewId}`);
  };

  return (
    <Button
      styleType={ButtonType.Type4}
      className="m-3 mr-[4rem] flex items-center justify-center self-end rounded-xl border p-2"
      onClick={finishInterview}
    >
      면접 종료
    </Button>
  );
};

export default CompleteChatButton;
