import { startTransition, useOptimistic, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MyPageBookmarkDataType } from '../type';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as SelectedBookmarkIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';

const BookmarkItem = ({
  id,
  content: title,
  categoryNames: categoryList,
}: MyPageBookmarkDataType) => {
  const [isBookmarked, dispatch] = useOptimistic(true, (prev, _) => !prev);
  const onClick = (e) => {
    e.preventDefault();
    startTransition(() => dispatch(undefined));
  };

  return (
    <Link
      href={`/questions/${id}`}
      className="flex cursor-pointer items-center gap-[2rem] p-[1rem]"
      role="presentation"
    >
      <div className="flex flex-col gap-[0.8rem] rounded-lg">
        <div className="flex gap-[1rem]">
          {categoryList?.map((category) => (
            <div
              key={uuidv4()}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-background-20 px-[1rem] py-[0.5rem] text-[1rem] text-black tablet:text-[1.2rem]"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex pl-[0.5rem] text-[1.5rem] tablet:text-[1.7rem]">
          <span className="whitespace-pre text-text-60">Q. </span>
          <div className="flex justify-start">{title}</div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <button
          onClick={onClick}
          className="*:size-[2.5rem] *:text-primaries-primary"
        >
          {isBookmarked ? <SelectedBookmarkIcon /> : <BookmarkIcon />}
        </button>
      </div>
    </Link>
  );
};

export default BookmarkItem;
