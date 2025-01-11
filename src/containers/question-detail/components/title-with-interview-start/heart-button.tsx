'use client';

import { useState } from 'react';

import { notify } from '@/shared/components/toast';

import { HeartIcon as SelectedHeartIcon } from '@heroicons/react/24/solid';

export interface IProps {
  questionId: number;
  isHearted: boolean;
  questionHeartCount: number;
}

const HeartButton = ({
  questionId,
  isHearted: initialIsHearted,
  questionHeartCount: initialHeartsCount,
}: IProps) => {
  const [isHeart, setIsHeart] = useState(initialIsHearted);
  const [heartsCount, setHeartsCount] = useState(initialHeartsCount);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeartClick = async () => {
    setIsLoading(true);
    setIsHeart(!isHeart);
    setHeartsCount((prev) => (isHeart ? prev - 1 : prev + 1));
    setIsLoading(false);
  };

  return (
    <div className="flex gap-2">
      <span className="text-large">{heartsCount}</span>

      <button
        type="button"
        disabled={isLoading}
        onClick={handleHeartClick}
        className="*:size-[2.5rem]"
      >
        {isHeart ? (
          <SelectedHeartIcon className="text-primaries-active" />
        ) : (
          <SelectedHeartIcon className="text-slate-300 hover:text-blue-300" />
        )}
      </button>
    </div>
  );
};

export default HeartButton;
