'use client';

import { createNewQuestion } from '@/shared/services/record-interview/create-openai-quetion';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { ForwardIcon } from '@heroicons/react/24/outline';

const NextQuestionButton = () => {
  const { questionCount } = usePresettingDataStore();
  const { createdQuestionCount } = useInterviewQuestionAnswerStore();

  if (createdQuestionCount >= questionCount) {
    return;
  }

  return (
    <button
      className="hover:text-primaries-primary"
      onClick={createNewQuestion}
    >
      <ForwardIcon />
      다음 질문
    </button>
  );
};

export default NextQuestionButton;
