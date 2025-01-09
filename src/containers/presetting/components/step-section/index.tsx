import './style.css';

import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import usePresettingDataStore from '../../../../stores/presetting/usePresettingDataStore';
import useStepStore from '../../../../stores/presetting/useStepStore';
import StepBar from './components/step-bar';
import StepCircle from './components/step-circle';
import { TITLE_LIST } from './constants/stepTitle';
import { StepNumber } from './type';

const StepSection = () => {
  const { currentStep, totalStep, setCameraStep, setChattingStep } =
    useStepStore();
  const { interviewType } = usePresettingDataStore();

  useEffect(() => {
    if (interviewType === 'TEXT') {
      setChattingStep();
      return;
    }
    setCameraStep();
  }, [interviewType, setCameraStep, setChattingStep]);

  return (
    <div className="relative flex w-full justify-center gap-[1rem] text-[1.3rem] font-semibold tablet:h-[12rem] tablet:items-center tablet:px-[3rem] tablet:text-[1.6rem]">
      {Array.from({ length: totalStep }, (_, i) => i + 1).map((step) => (
        <div
          className="flex items-center justify-center"
          key={uuidv4()}
        >
          <div className="flex flex-col items-center justify-center gap-[0.5rem]">
            <StepCircle
              number={step}
              isPassed={currentStep >= step}
            />
            <div className="relative flex w-[8rem] items-center justify-center gap-[0.2rem] tablet:w-[9.5rem] tablet:gap-[0.3rem]">
              <span
                className={`flex items-center justify-center ${currentStep === step ? 'text-primaries-primary' : 'text-text-80'} `}
              >
                {TITLE_LIST[step as StepNumber]}
              </span>
              {step === 1 && (
                <span className="tooltip-mark flex h-[1.4rem] w-[1.4rem] select-none items-center justify-center rounded-full border-[0.13rem] border-text-80 text-[1.1rem] text-text-80 tablet:h-[1.5rem] tablet:w-[1.5rem] tablet:text-[1.2rem]">
                  <div className="tooltip-box invisible absolute left-0 top-[120%] z-10 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-[1.5rem] font-medium text-white opacity-0 shadow-sm transition-opacity duration-300">
                    첫 질문과 이에 대한 꼬리 질문들로 면접이 진행됩니다
                  </div>
                  ?
                </span>
              )}
            </div>
          </div>
          {step !== totalStep && (
            <StepBar
              key={`step-bar-${step}`}
              isPassed={currentStep > step}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepSection;
