import { useEffect } from 'react';

import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';
import useStepStore from '@/container/presetting/stores/useStepStore';

import QuestionSection from './components/question-section';
import TagSection from './components/tag-section';

const FirstQuestionScene = () => {
  const { setNextButtonOn, setNextButtonOff } = useStepStore();
  const { firstQuestionTags, firstQuestion } = usePresettingDataStore();

  useEffect(() => {
    if (firstQuestionTags.length && firstQuestion) {
      setNextButtonOn();
      return;
    }
    setNextButtonOff();
  }, [
    firstQuestion,
    firstQuestionTags.length,
    setNextButtonOff,
    setNextButtonOn,
  ]);

  return (
    <div className="flex h-full w-[40rem] flex-col items-center justify-center gap-[4.5rem]">
      <div className="flex w-full flex-col items-center justify-center gap-[5rem] tablet:gap-[5rem]">
        <TagSection />
        <div className="h-[14rem] w-full">
          {firstQuestionTags.length > 0 && <QuestionSection />}
        </div>
      </div>
    </div>
  );
};

export default FirstQuestionScene;
