'use client';

import { startTransition, useOptimistic } from 'react';

import { HeartIcon as SelectedLikeIcon } from '@heroicons/react/24/solid';
import {
  likeQuestion,
  unLikeQuestion,
} from '@/shared/services/question/like-question';

export interface IProps {
  questionId: number;
  initialIsLiked: boolean;
  initialLikeCount: number;
  onClick?: () => Promise<void>;
}

const LikeButton = ({
  questionId,
  initialIsLiked,
  initialLikeCount,
  onClick,
}: IProps) => {
  const [likeState, trigger] = useOptimistic(
    { isLiked: initialIsLiked, count: initialLikeCount },
    (prev, _) => ({
      isLiked: !prev.isLiked,
      count: prev.isLiked ? prev.count - 1 : prev.count + 1,
    }),
  );

  const handleLikeClick = async () => {
    startTransition(() => trigger(undefined));
    likeState.isLiked
      ? await unLikeQuestion(questionId, 1)
      : await likeQuestion(questionId, 1);
    onClick && (await onClick());
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleLikeClick}
        className="*:size-[2.5rem]"
      >
        {likeState.isLiked ? (
          <SelectedLikeIcon className="text-primaries-active" />
        ) : (
          <SelectedLikeIcon className="text-slate-300 hover:text-blue-300" />
        )}
      </button>
      <span className="text-large">{likeState.count}</span>
    </div>
  );
};

export default LikeButton;
