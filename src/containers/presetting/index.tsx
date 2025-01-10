'use client';

import { useEffect, useState } from 'react';

import NotFound from '@/app/not-found';
import DividerHorizontal from '@/components/divider-horizontal';
import { notify } from '@/components/toast';

import PreSettingButtonSection from './components/buttonSection';
import PreSettingSceneSection from './components/sceneSection';
import StepSection from './components/step-section';
import usePresettingDataStore from '../../stores/presetting/usePresettingDataStore';
import useStepStore from '../../stores/presetting/useStepStore';
import { PreSettingProps } from './type';

const PreSetting = ({ firstQuestionId }: PreSettingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuestionError, setIsQuestionError] = useState(false);
  const { setFirstQuestion, resetAllPresettingDatas } =
    usePresettingDataStore();
  const { setSettingStep, resetAllStepDatas } = useStepStore();

  useEffect(() => {
    resetAllStepDatas();
    resetAllPresettingDatas();
  }, [resetAllStepDatas, resetAllPresettingDatas]);

  useEffect(() => {
    setIsLoading(true);
    if (firstQuestionId) {
      setSettingStep();
      setFirstQuestion({
        name: '',
        id: firstQuestionId,
      });
    }
    setIsLoading(false);
  }, [firstQuestionId, setFirstQuestion, setSettingStep]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  if (isQuestionError) {
    return <NotFound />;
  }

  return (
    <div className="flex h-[70rem] max-h-full w-full flex-col items-center rounded-3xl bg-text-20 bg-opacity-20 p-[2rem] text-[1.6rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] tablet:h-[70rem] tablet:max-w-[80rem]">
      <StepSection />
      <DividerHorizontal className="mx-[1rem] mt-[1rem] w-full" />
      <div className="flex h-full w-full flex-col items-center">
        <PreSettingSceneSection />
        <PreSettingButtonSection fromQuestionPage={!!firstQuestionId} />
      </div>
    </div>
  );
};

export default PreSetting;
