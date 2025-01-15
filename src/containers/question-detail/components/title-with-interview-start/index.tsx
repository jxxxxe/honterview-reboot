import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/shared/components/button';
import Tag from '@/shared/components/tag';

import { ReactNode } from 'react';

import { ICategory } from '@/shared/types/category-list';
import HeartButton from './heart-button';
import BookmarkButton from './bookmark-button';

export interface IProps {
  children: ReactNode;
  questionTitle: string;
  categoryNames: string[];
  questionId: number;
  heartsCount: number;
  isHearted: boolean;
  isBookmarked: boolean;
  categoryList: ICategory[];
}

// TODO: sangmin // 수정 삭제에 대한 권한 UI 적용

const TitleWithInterviewStart = async ({
  children,
  questionTitle,
  categoryNames,
  questionId,
  heartsCount,
  categoryList,
  isHearted,
  isBookmarked,
}: IProps) => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <HeartButton
          questionId={questionId}
          isHearted={isHearted}
          questionHeartCount={heartsCount}
        />
        <BookmarkButton
          questionId={questionId}
          isBookmarked={isBookmarked}
        />
      </div>
      <div className="relative flex flex-col gap-7">
        <h1 className="text-[3.2rem] font-medium leading-tight text-[#3C4654]">
          {children}
        </h1>
        <ul className="flex w-1/2 flex-wrap gap-4">
          {categoryNames.map((category) => (
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
        <Link
          className="absolute bottom-0 right-0 text-[1.5rem] text-xl"
          href={`/interview/presetting/${questionId}`}
        >
          <Button>모의 면접 시작</Button>
        </Link>
      </div>
    </div>
  );
};

export default TitleWithInterviewStart;
