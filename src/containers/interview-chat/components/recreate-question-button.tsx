import { recreateQuestion } from '@/shared/services/record-interview/create-openai-quetion';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const RecreateQutestionButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const onRecreate = async () => {
    setIsVisible(false);
    recreateQuestion();
  };

  if (!isVisible) {
    return;
  }

  return (
    <div className="relative flex w-fit items-center justify-start gap-3">
      <button
        onClick={onRecreate}
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
