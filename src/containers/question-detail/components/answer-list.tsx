'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';

import BlurAnswer from './blur-answer';
import Answer from './answer';
import { dummyAnswerList } from '@/app/questions/dummydata';

export interface IProps {
  // initialData: IGetQuestionById;
  questionId: number;
  isModalLoad: boolean;
}

const AnswerList = ({ questionId, isModalLoad }: IProps) => {
  const [isInvisible, setIsInvisible] = useState(false);
  const data = dummyAnswerList.data.data;

  const handleBlurAnswerClick = () => {
    setIsInvisible(false);
  };

  return (
    <>
      {data.map(({ nickname, content, id, heartsCount }) => (
        <Answer
          key={uuidv4()}
          answerId={id}
          questionId={questionId}
          nickname={nickname}
          content={content}
          heartsCount={heartsCount}
          isHearted={false}
        />
      ))}
      {isInvisible && (
        <button
          type="button"
          onClick={handleBlurAnswerClick}
          className="text-left"
        >
          <BlurAnswer />
        </button>
      )}
    </>
  );
};

export default AnswerList;
