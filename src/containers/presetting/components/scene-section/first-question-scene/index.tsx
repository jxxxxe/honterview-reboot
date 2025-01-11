import { useEffect } from 'react';

import QuestionSection from './question-section';
import TagSection from './tag-section';
import useStepStore from '@/shared/stores/presetting/useStepStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';

const FirstQuestionScene = () => {
  const { setNextButtonOn, setNextButtonOff } = useStepStore();
  const { firstQuestionTagList, firstQuestion } = usePresettingDataStore();

  useEffect(() => {
    if (firstQuestionTagList.length && firstQuestion) {
      setNextButtonOn();
      return;
    }
    setNextButtonOff();
  }, [
    firstQuestion,
    firstQuestionTagList.length,
    setNextButtonOff,
    setNextButtonOn,
  ]);

  return (
    <div className="flex h-full w-[40rem] flex-col items-center justify-center gap-[4.5rem]">
      <div className="flex w-full flex-col items-center justify-center gap-[5rem] tablet:gap-[5rem]">
        <TagSection />
        <div className="h-[14rem] w-full">
          {firstQuestionTagList.length > 0 && <QuestionSection />}
        </div>
      </div>
    </div>
  );
};

export default FirstQuestionScene;
