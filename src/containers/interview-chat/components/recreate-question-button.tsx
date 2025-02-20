import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const RecreateQutestionButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { currentQuestion, answerList, changeQuestion, resetCurrentAnswer } =
    useInterviewQuestionAnswerStore();

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

  if (!isVisible) {
    return;
  }

  return (
    <div className="relative flex w-fit items-center justify-start gap-3">
      <button
        onClick={recreateQuestion}
        className="peer hidden w-fit pr-3 group-last:inline-flex"
      >
        <ArrowPathIcon className="size-8" />
      </button>
      <div className="absolute right-[-3rem] top-[60%] hidden w-[9.5rem] rounded-lg bg-text-100 p-1 text-medium text-text-20 peer-hover:flex">
        질문 변경하기
      </div>
    </div>
  );
};

export default RecreateQutestionButton;
