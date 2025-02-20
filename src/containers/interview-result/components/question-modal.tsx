'use client';

import { useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import Modal from '@/shared/components/modal';
import AnswerList from '@/containers/question-detail/components/answer-list';

interface IProps {
  questionContent: string;
  questionId: number;
}

const QuestionModal = ({ questionContent, questionId }: IProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleVisible}
        className={`inline-block p-1 px-3 text-left text-large font-bold underline decoration-gray-300 underline-offset-4 hover:bg-primaries-primary hover:bg-opacity-10`}
      >
        {questionContent}
      </button>
      <Modal
        visible={visible}
        onClose={toggleVisible}
        className="relative h-fit max-h-[50rem] w-[50%] rounded-3xl bg-white px-16 py-10 shadow-2xl"
      >
        <button
          type="button"
          onClick={toggleVisible}
          className="absolute right-0 top-0 rounded-full p-2 transition-all hover:bg-primaries-hover"
        >
          <XMarkIcon className="h-[30px] w-[30px] stroke-black" />
        </button>
        <h1 className="mb-10 text-doubleLarge">{questionContent}</h1>
        <div className="flex max-h-[310px] flex-col gap-4 overflow-auto">
          <AnswerList questionId={questionId} />
        </div>
      </Modal>
    </>
  );
};

export default QuestionModal;
