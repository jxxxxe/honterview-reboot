'use client';

import { useEffect, useState } from 'react';

import NotFound from '@/app/not-found';
import DividerHorizontal from '@/shared/components/divider-horizontal';

import PreSettingButtonSection from './components/buttonSection';
import PreSettingSceneSection from './components/scene-section';
import StepSection from './components/step-section';
import usePresettingDataStore from '../../shared/stores/presetting/usePresettingDataStore';
import useStepStore from '../../shared/stores/presetting/useStepStore';
import LoadingIcon from '@/shared/components/loading-icon';

export interface PreSettingProps {
  firstQuestionId?: number;
}

const PreSetting = ({ firstQuestionId }: PreSettingProps) => {
  const { setFirstQuestion, resetAllPresettingDatas } =
    usePresettingDataStore();
  const { setSettingStep, resetAllStepDatas } = useStepStore();

  useEffect(() => {
    resetAllStepDatas();
    resetAllPresettingDatas();
  }, [resetAllStepDatas, resetAllPresettingDatas]);

  useEffect(() => {
    if (firstQuestionId) {
      setSettingStep();
      setFirstQuestion({
        name: '',
        id: firstQuestionId,
      });
    }
  }, [firstQuestionId, setFirstQuestion, setSettingStep]);

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
