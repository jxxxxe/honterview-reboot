'use client';

import { useState } from 'react';

import LikeQuestionSection from './data-section/like-list-section';
import ResultSection from './data-section/result-list-section';
import NavigationSection from './navigation-section';

const ContentSection = () => {
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
      <LikeQuestionSection isVisible={isBookmarkOn} />
      <ResultSection isVisible={isResultOn} />
    </div>
  );
};

export default ContentSection;
