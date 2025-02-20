'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { ForwardIcon } from '@heroicons/react/24/outline';

const NextQuestionButton = () => {
  const { questionCount, firstQuestionTagList } = usePresettingDataStore();
  const {
    createdQuestionCount,
    addQuestion,
    currentQuestion,
    addAnswer,
    answerList,
  } = useInterviewQuestionAnswerStore();

  const createNewQuestion = async () => {
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
