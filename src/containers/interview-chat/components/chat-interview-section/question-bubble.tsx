import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { PropsWithChildren, useEffect } from 'react';

const QuestionBubble = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-fit items-center justify-start gap-3">
      <div className="flex flex-col items-center text-[1.5rem]">
        <UserCircleIcon className="size-20" />
        면접관
      </div>
      <div className="mr-1 flex rounded-e-3xl rounded-es-3xl border px-8 py-5">
        {children}
      </div>
    </div>
  );
};

export default QuestionBubble;
