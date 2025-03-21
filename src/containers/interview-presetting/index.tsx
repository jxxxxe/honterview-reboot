'use client';

import { useEffect, useState } from 'react';

import NotFound from '@/app/not-found';
import DividerHorizontal from '@/shared/components/divider-horizontal';

import PreSettingButtonSection from './components/button-section';
import PreSettingSceneSection from './components/scene-section';
import StepSection from './components/step-section';
import usePresettingDataStore from '../../shared/stores/presetting/usePresettingDataStore';
import useStepStore from '../../shared/stores/presetting/useStepStore';
import { getQuestionById } from '@/shared/services/question/get-question';

export interface PreSettingProps {
  firstQuestionId?: number;
}

const PreSetting = ({ firstQuestionId }: PreSettingProps) => {
  const { setFirstQuestion, resetAllPresettingDatas, firstQuestionTagList } =
    usePresettingDataStore();
  const { setSettingStep, resetAllStepDatas } = useStepStore();

  useEffect(() => {
    resetAllStepDatas();
    resetAllPresettingDatas();
  }, []);

  useEffect(() => {
    if (!firstQuestionId) {
      return;
    }

    const getQuestion = async () => {
      const firstQuestion = await getQuestionById(firstQuestionId);
      setFirstQuestion({
        name: firstQuestion.content,
        id: firstQuestionId,
      });
    };

    setSettingStep();
    getQuestion();
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
