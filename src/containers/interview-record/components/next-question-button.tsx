'use client';

import { createNewQuestion } from '@/shared/services/interview/openai';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { ForwardIcon } from '@heroicons/react/24/outline';

const NextQuestionButton = () => {
  // const { questionCount, firstQuestionTagList } = usePresettingDataStore();
  const questionCount = 5;
  const { createdQuestionCount, addQuestion, questionList } =
    useInterviewQuestionAnswerStore();

  if (createdQuestionCount >= questionCount) {
    return <></>;
  }

  return (
    <button
      className="hover:text-primaries-primary"
      onClick={() =>
        createNewQuestion(
          // firstQuestionTagList.map((tag) => tag.name),
          ['프론트엔드'],
          addQuestion,
          questionList,
        )
      }
    >
      <ForwardIcon />
      다음 질문
    </button>
  );
};

export default NextQuestionButton;
