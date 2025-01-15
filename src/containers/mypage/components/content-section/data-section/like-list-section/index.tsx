import { v4 as uuidv4 } from 'uuid';

import { dummyBookmarks } from '../dummyData';
import LikeItem from './like-item';

export interface MyPageBookmarkDataSectionProps {
  isVisible: boolean;
}

const BookmarkSection = ({ isVisible }: MyPageBookmarkDataSectionProps) => {
  return (
    <div
      className={`tablet:w-[50rem] ${!isVisible && 'hidden'} flex w-full flex-1 flex-col items-center gap-[2rem] p-[1rem] pb-[3rem]`}
    >
      {dummyBookmarks.data.data?.map((content) => (
        <div
          className="flex w-full flex-col gap-[1rem] rounded-xl border border-dotted border-gray-300 transition-colors hover:bg-slate-100"
          key={uuidv4()}
        >
          <LikeItem
            id={content.id}
            content={content.content}
            categoryNames={content.categoryNames}
          />
        </div>
      ))}
    </div>
  );
};

export default BookmarkSection;
