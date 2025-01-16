import { startTransition, useOptimistic, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { HeartIcon as LikeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SelectedLikeIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';

interface LikeItemProps {
  id: number;
  content: string;
  likeCount?: number;
  categoryNames: string[];
}

const LikeItem = ({
  id,
  content: title,
  categoryNames: categoryList,
}: LikeItemProps) => {
  const [isLiked, trigger] = useOptimistic(true, (prev, _) => !prev);
  const onClick = (e) => {
    e.preventDefault();
    startTransition(() => trigger(undefined));
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
          {isLiked ? <SelectedLikeIcon /> : <LikeIcon />}
        </button>
      </div>
    </Link>
  );
};

export default LikeItem;
