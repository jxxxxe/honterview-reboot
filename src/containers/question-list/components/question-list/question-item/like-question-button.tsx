'use client';

import { startTransition, useOptimistic, useState } from 'react';

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

const LikeQuestionButton = ({
  questionId,
  initialIsLiked,
  initialLikeCount,
}: IProps) => {
  const [isLikedData, setIsLikedData] = useState(initialIsLiked);
  const [likeCountData, setLikeCountData] = useState(initialLikeCount);

  // const [likeState, trigger] = useOptimistic(
  //   { isLiked: isLikedData, count: likeCountData, isLoading: false },
  //   (prev, _) => {
  //     console.log('click', questionId, prev);

  //     return {
  //       isLiked: !prev.isLiked,
  //       count: prev.isLiked ? prev.count - 1 : prev.count + 1,
  //       isLoading: true,
  //     };
  //   },
  // );
  console.log(questionId, isLikedData, likeCountData);

  const handleLikeClick = async () => {
    // startTransition(() => trigger(undefined));
    isLikedData
      ? await unLikeQuestion(questionId, 1)
      : await likeQuestion(questionId, 1);
    setIsLikedData(!isLikedData);
    setLikeCountData(isLikedData ? likeCountData - 1 : likeCountData + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleLikeClick}
        className="*:size-[2.5rem]"
      >
        {isLikedData ? (
          <SelectedLikeIcon className="text-primaries-active" />
        ) : (
          <SelectedLikeIcon className="text-slate-300 hover:text-blue-300" />
        )}
      </button>
      <span className="text-large">{likeCountData}</span>
    </div>
  );
};

export default LikeQuestionButton;
