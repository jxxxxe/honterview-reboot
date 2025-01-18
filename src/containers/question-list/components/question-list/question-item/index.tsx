import Link from 'next/link';
import QuestionTitle from './question-title';
import QuestionInterviewButton from './question-interview-button';
import { v4 } from 'uuid';
import { useEffect, useState } from 'react';
import LikeQuestionButton from '@/containers/question-list/components/question-list/question-item/like-question-button';
import { apiFetch } from '@/shared/utils/apiFetch';
import { cachedIsLikedQuestion } from '@/shared/services/question/like-question';

/**
 * TODO
 * Error Fix
 * 1. 자식 컴포넌트가 변경되면 부모 컴포넌트도 리렌더링 됨; WHY??????
 *  (like 클릭 시, 전체 하트 깜빡거리다 반영은 안되는 현상 => 1로 인해 맨 처음 받아온 값으로 늘 초기화 됨;)
 * 2. 프로덕션: 리스트 컴포넌트 땜에 페이지 404에러남;
 *
 * (해결) 초기 like 데이터 느리게 나오는 현상 => like 정보를 question정보 가져올 때 같이 가져옴으로 해결
 */

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
