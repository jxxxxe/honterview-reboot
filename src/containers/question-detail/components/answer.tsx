'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { notify } from '@/shared/components/toast';

import { HeartIcon as SelectedHeartIcon } from '@heroicons/react/24/solid';

interface IProps {
  nickname: string;
  content: string;
  isBlur?: boolean;
  className?: string;
  answerId: number;
  isHearted: boolean;
  heartsCount: number;
  questionId: number;
}

const Answer = ({
  nickname,
  content,
  className,
  answerId,
  questionId,
  isHearted: initialIsHearted,
}: IProps) => {
  const [isHeart, setIsHeart] = useState(initialIsHearted);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeartClick = async () => {
    setIsLoading(true);
    setIsHeart(!isHeart);
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
      <p className="text-[1.8rem] font-light text-[#4e5968]">{content}</p>
    </div>
  );
};

export default Answer;
