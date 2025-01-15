'use client';

import { useState } from 'react';

import { notify } from '@/shared/components/toast';

import { HeartIcon as SelectedLikeIcon } from '@heroicons/react/24/solid';

export interface IProps {
  questionId: number;
  isLiked: boolean;
  questionLikeCount: number;
}

const LikeButton = ({
  questionId,
  isLiked: initialIsLiked,
  questionLikeCount: initialLikeCount,
}: IProps) => {
  const [isLike, setIsLike] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLoading, setIsLoading] = useState(false);

  const handleLikeClick = async () => {
    setIsLoading(true);
    setIsLike(!isLike);
    setLikeCount((prev) => (isLike ? prev - 1 : prev + 1));
    setIsLoading(false);
  };

  return (
    <div className="flex gap-2">
      <span className="text-large">{likeCount}</span>

      <button
        type="button"
        disabled={isLoading}
        onClick={handleLikeClick}
        className="*:size-[2.5rem]"
      >
        {isLike ? (
          <SelectedLikeIcon className="text-primaries-active" />
        ) : (
          <SelectedLikeIcon className="text-slate-300 hover:text-blue-300" />
        )}
      </button>
    </div>
  );
};

export default LikeButton;
