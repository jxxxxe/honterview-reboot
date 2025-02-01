'use client';

import { recreateQuestion } from '@/shared/services/interview/openai';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const RecreateRecordQuestionButton = () => {
  const { createdQuestionCount, currentQuestion, answerList, changeQuestion } =
    useInterviewQuestionAnswerStore();
  const [isRecreated, setIsRecreated] = useState(false);

  if (createdQuestionCount <= 1) {
    return;
  }

  const onRecreate = async () => {
    recreateQuestion(currentQuestion, answerList, changeQuestion);
    setIsRecreated(true);
  };

  return (
    <button
      className="hover:text-primaries-primary"
      onClick={onRecreate}
      style={{ display: isRecreated ? 'none' : 'block' }}
    >
      <ArrowPathIcon />
      다른 질문
    </button>
  );
};

export default RecreateRecordQuestionButton;
