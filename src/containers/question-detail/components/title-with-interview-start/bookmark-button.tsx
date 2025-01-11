'use client';

import { useState } from 'react';

import { notify } from '@/shared/components/toast';

import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as SelectedBookmarkIcon } from '@heroicons/react/24/outline';

export interface IProps {
  questionId: number;
  isBookmarked: boolean;
}

const BookmarkButton = ({
  questionId,
  isBookmarked: initialIsBookmarked,
}: IProps) => {
  const [isBookmark, setIsBookmark] = useState(initialIsBookmarked);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookmarkClick = async () => {
    setIsLoading(true);
    setIsBookmark(!isBookmark);
    setIsLoading(false);
  };

  return (
    <>
      <button
        disabled={isLoading}
        onClick={handleBookmarkClick}
        className="*:size-[2.5rem] *:text-primaries-primary"
      >
        {isBookmark ? <SelectedBookmarkIcon /> : <BookmarkIcon />}
      </button>
    </>
  );
};

export default BookmarkButton;
