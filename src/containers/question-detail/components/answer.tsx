'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { notify } from '@/shared/components/toast';

import { LikeIcon as SelectedLikeIcon } from '@heroicons/react/24/solid';

interface IProps {
  nickname: string;
  content: string;
  isBlur?: boolean;
  className?: string;
  answerId: number;
  isLiked: boolean;
  likeCount: number;
  questionId: number;
}

const Answer = ({
  nickname,
  content,
  className,
  answerId,
  questionId,
  isLiked: initialIsLiked,
}: IProps) => {
  const [isLike, setIsLike] = useState(initialIsLiked);
  const [isLoading, setIsLoading] = useState(false);

  const handleLikeClick = async () => {
    setIsLoading(true);
    setIsLike(!isLike);
    setIsLoading(false);
  };

  return (
    <div
      className={twMerge(
        `rounded-lg border-[1px] border-dashed border-slate-300 bg-white p-6 ${className}`,
      )}
    >
      <div className="mb-5 flex justify-between">
        <h4 className="text-[1.8rem] font-semibold text-[#3182F6]">
          {nickname}
        </h4>
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
      <p className="text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default Answer;
