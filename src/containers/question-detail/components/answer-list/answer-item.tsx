'use client';

import { startTransition, useOptimistic, useState } from 'react';

import { HeartIcon as SelectedLikeIcon } from '@heroicons/react/24/solid';
import { likeAnswer, unLikeAnswer } from '@/shared/services/answer/like-answer';

interface IProps {
  answerId: number;
  nickname: string;
  content: string;
  isLiked: boolean;
  likeCount: number;
}

const AnswerItem = ({
  answerId,
  nickname,
  content,
  likeCount,
  isLiked,
}: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, dispatch] = useOptimistic(isLiked, (prev, _) => !prev);

  const handleLikeClick = async () => {
    startTransition(() => dispatch(null));
    setIsLoading(true);
    status ? await unLikeAnswer(answerId, 1) : await likeAnswer(answerId, 1);
    setIsLoading(false);
  };

  return (
    <div
      className={`rounded-lg border-[1px] border-dashed border-slate-300 bg-white p-6`}
    >
      <div className="mb-5 flex justify-between">
        <h4 className="text-[1.8rem] font-semibold text-[#3182F6]">
          {nickname}
        </h4>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={isLoading}
            onClick={handleLikeClick}
            className="*:size-[2.5rem]"
          >
            {status ? (
              <SelectedLikeIcon className="text-primaries-active" />
            ) : (
              <SelectedLikeIcon className="text-slate-300 hover:text-blue-300" />
            )}
          </button>
          <span className="text-large">{likeCount}</span>
        </div>
      </div>
      <p className="text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default AnswerItem;
