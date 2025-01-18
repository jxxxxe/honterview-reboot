import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/shared/components/button';
import Tag from '@/shared/components/tag';

import LikeQuestionButton from '../../question-list/components/question-list/question-item/like-question-button';
import { notFound } from 'next/navigation';
import { getQuestion } from '@/shared/services/question/get-question';
import { cachedIsLikedQuestion } from '@/shared/services/question/like-question';

export interface IProps {
  questionId: number;
}

const QuestionDetailHeader = async ({ questionId }: IProps) => {
  const question = await getQuestion(questionId);

  if (!question) {
    notFound();
  }

  const questionTitle = question.content;
  const categoryNameList = question.categories.map((category) => category.name);
  const { isLiked, likeCount } = await cachedIsLikedQuestion(questionId, 1);

  return (
    <div>
      <div className="flex items-center justify-end">
        <LikeQuestionButton
          questionId={questionId}
          initialIsLiked={isLiked}
          initialLikeCount={likeCount}
        />
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-[2rem] font-medium leading-tight text-[#3C4654] sm:text-[3rem]">
          {questionTitle}
        </h1>
        <div className="flex h-fit items-center justify-between">
          <ul className="flex h-fit flex-1 items-center gap-4 overflow-y-scroll pb-0">
            {categoryNameList.map((category) => (
              <li key={uuidv4()}>
                <Tag
                  style={{
                    backgroundColor: 'rgb(227, 228, 231)',
                    color: 'black',
                    borderRadius: '1.5rem',
                    fontWeight: '600',
                  }}
                >
                  {category}
                </Tag>
              </li>
            ))}
          </ul>
          <Link href={`/interview/presetting/${questionId}`}>
            <Button className="px-3 py-[0.8rem] sm:px-[5rem] sm:py-[1.2rem]">
              모의 면접 시작
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailHeader;
