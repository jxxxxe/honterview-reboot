'use client';

import { useState } from 'react';

import BookmarkSection from './components/dataSection/bookmarkSection';
import ResultSection from './components/dataSection/resultSection';
import NavigationSection from './components/navigationSection';

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
      <BookmarkSection isVisible={isBookmarkOn} />
      <ResultSection isVisible={isResultOn} />
    </div>
  );
};

export default ContentSection;
