import { v4 as uuidv4 } from 'uuid';

import LikeItem from './like-item';
import { IMypageLikedQuestion } from '@/shared/types/mypage';

export interface MyPageBookmarkDataSectionProps {
  likedQuestionList: IMypageLikedQuestion[];
  isVisible: boolean;
}

const LikeQuestionSection = ({
  likedQuestionList,
  isVisible,
}: MyPageBookmarkDataSectionProps) => {
  return (
    <div
      className={`tablet:w-[50rem] ${!isVisible && 'hidden'} flex w-full flex-1 flex-col items-center gap-[2rem] p-[1rem] pb-[3rem]`}
    >
      {likedQuestionList?.map(({ question }) => (
        <div
          className="flex w-full flex-col gap-[1rem] rounded-xl border border-dotted border-gray-300 transition-colors hover:bg-slate-100"
          key={uuidv4()}
        >
          <LikeItem
            id={question.id}
            content={question.content}
            categoryNames={question.categories.map(({ name }) => name)}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeQuestionSection;
