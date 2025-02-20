'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const RecreateRecordQuestionButton = () => {
  const { createdQuestionCount } = useInterviewQuestionAnswerStore();
  const [isVisible, setIsVisible] = useState(false);

  if (createdQuestionCount <= 1) {
    return;
  }

  const onRecreate = async () => {
    recreateQuestion();
    setIsVisible(false);
  };

  return (
    <button
      className="hover:text-primaries-primary"
      onClick={onRecreate}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <ArrowPathIcon />
      다른 질문
    </button>
  );
};

export default RecreateRecordQuestionButton;
