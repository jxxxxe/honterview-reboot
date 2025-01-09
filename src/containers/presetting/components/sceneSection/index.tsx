import { AnimatePresence } from 'framer-motion';

import useStepStore from '../../../../stores/presetting/useStepStore';
import FirstQuestionScene from './components/firstQuestionScene';
import InterviewSettingScene from './components/interviewSettingScene';
import TermsScene from './components/termsScene';
import VideoCheckScene from './components/videoCheckScene';

const PreSettingSceneSection = () => {
  const { currentStep } = useStepStore();

  return (
    <div className="flex w-full flex-1 items-center justify-center overflow-hidden">
      <AnimatePresence>
        {currentStep === 1 && <FirstQuestionScene key={1} />}
        {currentStep === 2 && <InterviewSettingScene key={2} />}
        {currentStep === 3 && <TermsScene key={3} />}
        <VideoCheckScene key={4} />
      </AnimatePresence>
    </div>
  );
};

export default PreSettingSceneSection;
