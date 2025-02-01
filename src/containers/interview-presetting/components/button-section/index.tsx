import './style.css';

import { useRouter } from 'next/navigation';

import Button, { ButtonType } from '@/shared/components/button';

import usePresettingDataStore from '../../../../shared/stores/presetting/usePresettingDataStore';
import useStepStore from '../../../../shared/stores/presetting/useStepStore';
import usePresetting from '../../hooks/usePresetting';

export interface PreSettingButtonSectionProps {
  fromQuestionPage?: boolean;
}

const PreSettingButtonSection = ({
  fromQuestionPage,
}: PreSettingButtonSectionProps) => {
  const { totalStep, currentStep, increaseStep, decreaseStep, isNextButtonOn } =
    useStepStore();
  const { firstQuestion, interviewType } = usePresettingDataStore();
  const { createFirstQuestion } = usePresetting();
  const router = useRouter();

  const handlePrevButton = () => {
    if (currentStep <= 1 || (currentStep === 2 && fromQuestionPage)) {
      router.back();
      return;
    }
    decreaseStep();
  };

  const handleNextButton = async () => {
    if (currentStep < totalStep) {
      increaseStep();
      return;
    }

    if (firstQuestion?.id === 'new') {
      await createFirstQuestion();
    }

    const nextUrl =
      interviewType === 'RECORD'
        ? `/interview/practice/record`
        : `/interview/practice/chat`;

    router.push(nextUrl);
  };

  return (
    <div className="flex items-end gap-[1rem] tablet:bottom-[3rem]">
      <Button
        styleType={ButtonType.Type3}
        className="h-[4rem] w-[9rem] px-[0rem]"
        onClick={handlePrevButton}
      >
        이전
      </Button>
      <Button
        className={`h-[4rem] w-[9rem] px-[0rem] ${currentStep === totalStep && isNextButtonOn && 'start-button'}`}
        onClick={handleNextButton}
        disabled={!isNextButtonOn}
      >
        {currentStep === totalStep ? '시작' : '다음'}
      </Button>
    </div>
  );
};

export default PreSettingButtonSection;
