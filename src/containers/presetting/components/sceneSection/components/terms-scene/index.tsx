import React from 'react';

import SectionAnimationWrapper from '../section-animation-wrapper';
import TermsAgreeSection from './components/terms-agree-section';
import TermsDescriptionSection from './components/terms-description-section';
import TermsHeaderSection from './components/terms-header-section';

const TermsScene = () => {
  return (
    <SectionAnimationWrapper className="flex h-full w-full flex-col justify-center text-[1.5rem] tablet:text-[1.6rem]">
      <TermsHeaderSection />
      <TermsDescriptionSection />
      <TermsAgreeSection />
    </SectionAnimationWrapper>
  );
};

export default TermsScene;
