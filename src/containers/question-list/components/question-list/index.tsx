'use client';

import Link from 'next/link';
import { v4 as v4uuid } from 'uuid';

import QuestionInterviewButton from './question-interview-button';
import QuestionTag from './question-tag';
import QuestionTitle from './question-title';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useQuestionList } from '../../contexts';

const QuestionList = () => {
  const { totalSize, questionList, handleTagClick } = useQuestionList();

  return totalSize === 0 ? (
    <p className="text-center text-extraLarge text-text-60">
      검색 결과가 없습니다.
    </p>
  ) : (
    <div>
      {questionList.map(({ id, content, categoryNames, heartsCount }) => (
        <div
          key={v4uuid()}
          className="rounded-lg px-[2rem] py-[2rem] hover:bg-gray-100"
        >
          <div className="flex flex-grow justify-between pb-[2rem] text-[2.5rem] font-semibold">
            <Link href={`/questions/${id}`}>
              <QuestionTitle content={content} />
            </Link>
            <QuestionInterviewButton id={id} />
          </div>
          <div className="flex">
            {categoryNames
              .sort((a, b) => a.localeCompare(b))
              .map((tag) => (
                <QuestionTag
                  key={v4uuid()}
                  handleTagClick={handleTagClick}
                  tag={tag}
                />
              ))}
            <div className="ml-auto flex items-center gap-2 px-[1.5rem] text-extraLarge text-text-60">
              <HeartIcon className="size-10" />
              {heartsCount}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
