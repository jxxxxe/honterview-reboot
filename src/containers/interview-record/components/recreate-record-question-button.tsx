'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const RecreateRecordQuestionButton = () => {
  const {
    createdQuestionCount,
    currentQuestion,
    answerList,
    changeQuestion,
    resetCurrentAnswer,
  } = useInterviewQuestionAnswerStore();
  const [isVisible, setIsVisible] = useState(false);

  if (createdQuestionCount <= 1) {
    return;
  }

  const recreateQuestion = async () => {
    setIsVisible(false);

    resetCurrentAnswer();

    const { reply } = await apiFetch('api/interview/openai/question/new', {
      method: 'POST',
      body: JSON.stringify({
        prevAnswer: answerList.length ? answerList[answerList.length - 1] : '',
        currentQuestion,
      }),
    });

    changeQuestion(reply);
  };

  return (
    <button
      className="hover:text-primaries-primary"
      onClick={recreateQuestion}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <ArrowPathIcon />
      다른 질문
    </button>
  );
};

export default RecreateRecordQuestionButton;
