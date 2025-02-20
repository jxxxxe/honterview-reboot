'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { useEffect } from 'react';

export const createNewQuestion = () => {
  const { firstQuestionTagList } = usePresettingDataStore();
  const { addQuestion, currentQuestion, addAnswer, answerList } =
    useInterviewQuestionAnswerStore();

  useEffect(() => {
    const onCreate = async () => {
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
    onCreate();
  }, []);
};

export const recreateQuestion = () => {
  const { currentQuestion, answerList, changeQuestion, resetCurrentAnswer } =
    useInterviewQuestionAnswerStore();

  useEffect(() => {
    const onRecreate = async () => {
      resetCurrentAnswer();

      const { reply } = await apiFetch('api/interview/openai/question/new', {
        method: 'POST',
        body: JSON.stringify({
          prevAnswer: answerList.length
            ? answerList[answerList.length - 1]
            : '',
          currentQuestion,
        }),
      });

      changeQuestion(reply);
    };

    onRecreate();
  }, []);
};
