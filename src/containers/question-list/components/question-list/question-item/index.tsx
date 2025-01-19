import Link from 'next/link';
import QuestionTitle from './question-title';
import QuestionInterviewButton from './question-interview-button';
import { v4 } from 'uuid';
import { useEffect, useState } from 'react';
import LikeQuestionButton from '@/containers/question-list/components/question-list/question-item/like-question-button';
import { apiFetch } from '@/shared/utils/apiFetch';
import { cachedIsLikedQuestion } from '@/shared/services/question/like-question';

const QuestionItem = ({ id, content, categoryNames, likeCount, isLiked }) => {
  return (
    <div className="rounded-lg px-[0.5rem] py-[2rem] hover:bg-gray-100 md:px-[2rem]">
      <div className="flex flex-grow justify-between pb-[2rem] text-[1.5rem] font-semibold md:text-[2.5rem]">
        <Link href={`/questions/${id}`}>
          <QuestionTitle content={content} />
        </Link>
        <QuestionInterviewButton id={id} />
      </div>
      <div className="flex gap-3 pl-10 text-lg">
        {categoryNames
          .sort((a, b) => a.localeCompare(b))
          .map((tag) => (
            <div
              key={v4()}
              className="rounded-full border-none bg-[#e5e7eb] px-4 py-3 font-semibold text-black"
            >
              {tag}
            </div>
          ))}
        <div className="flex flex-1 items-center justify-end">
          <LikeQuestionButton
            questionId={id}
            initialIsLiked={isLiked}
            initialLikeCount={likeCount}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
