'use client';

import { useState } from 'react';

import LikeQuestionSection from './data-section/like-list-section';
import ResultSection from './data-section/result-list-section';
import NavigationSection from './navigation-section';
import { IMypageInterview, IMypageLikedQuestion } from '@/shared/types/mypage';

interface ContentSectionProps {
  likedQuestionList: IMypageLikedQuestion[];
  interviewList: IMypageInterview[];
}

const ContentSection = ({
  likedQuestionList,
  interviewList,
}: ContentSectionProps) => {
  const [activeMenu, setActiveMenu] = useState<'result' | 'bookmark'>(
    'bookmark',
  );
  const isBookmarkOn = activeMenu === 'bookmark';
  const isResultOn = activeMenu === 'result';

  return (
    <div className="flex flex-col items-center">
      <NavigationSection
        activeMenu={activeMenu}
        onClick={setActiveMenu}
      />
      <LikeQuestionSection
        likedQuestionList={likedQuestionList}
        isVisible={isBookmarkOn}
      />
      <ResultSection
        interviewList={interviewList}
        isVisible={isResultOn}
      />
    </div>
  );
};

export default ContentSection;
