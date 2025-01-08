import Link from 'next/link';
import { v4 as v4uuid } from 'uuid';

import QuestionInterviewButton from './components/question-interview-button';
import QuestionTag from './components/question-tag';
import QuestionTitle from './components/question-title';
import { HeartIcon } from '@heroicons/react/24/outline';
import { IQuestion } from '@/types/questionsList';

export interface IProps {
  handleTagClick: (tag: string) => void;
  questionsList: IQuestion[];
}

const QuestionList = ({ handleTagClick, questionsList }: IProps) => {
  return (
    <div>
      <div className="h-[85rem]">
        {questionsList.map(({ id, content, categoryNames, heartsCount }) => (
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
    </div>
  );
};

export default QuestionList;
