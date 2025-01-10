import { AnimatePresence } from 'framer-motion';

import useStepStore from '../../../../stores/presetting/useStepStore';
import FirstQuestionScene from './components/first-question-scene';
import InterviewSettingScene from './components/interview-setting-scene';
import TermsScene from './components/terms-scene';
import VideoCheckScene from './components/video-check-scene';

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
