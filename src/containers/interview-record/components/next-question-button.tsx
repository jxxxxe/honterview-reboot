'use client';

import Button from '@/shared/components/button';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { useEffect } from 'react';

const NextQuestionButton = () => {
  // const { questionCount } = usePresettingDataStore();
  const questionCount = 5;
  const { addQuestion, createdQuestionCount, questionList } =
    useInterviewQuestionAnswerStore();

  if (createdQuestionCount >= questionCount) {
    return <></>;
  }

  const createNextQuestion = async () => {
    const newQuestion = await apiFetch('api/interview/openai/question', {
      method: 'POST',
      body: JSON.stringify({
        prevQuestion: questionList.length
          ? questionList[questionList.length - 1]
          : '브라우저의 작동 순서를 말해주세요',
        prevResponse: '',
      }),
    });

    addQuestion(newQuestion.reply);
  };

  return <Button onClick={createNextQuestion}>다음 질문</Button>;
};

export default NextQuestionButton;
