'use client';

import { useOptimistic, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { HeartIcon as SelectedLikeIcon } from '@heroicons/react/24/solid';
import { likeAnswer, unLikeAnswer } from '@/shared/services/answer/like-answer';

interface IProps {
  answerId: number;
  nickname: string;
  content: string;
  isLiked: boolean;
  likeCount: number;
  className?: string;
}

const AnswerItem = ({
  answerId,
  nickname,
  content,
  likeCount,
  isLiked: initialIsLiked,
  className,
}: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [likeState, dispatch] = useOptimistic(initialIsLiked, (like) => !like);

  const handleLikeClick = async () => {
    setIsLoading(true);
    dispatch(null);
    likeState ? await unLikeAnswer(answerId, 1) : await likeAnswer(answerId, 1);
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
          {likeState ? (
            <SelectedLikeIcon className="text-primaries-active" />
          ) : (
            <SelectedLikeIcon className="text-slate-300 hover:text-blue-300" />
          )}
        </button>
        {likeCount}
      </div>
      <p className="text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default AnswerItem;
