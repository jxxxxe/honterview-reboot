'use client';

import RecoderSection from '@/containers/interview-record/components/recoder-section';
import TimerSection from '@/containers/interview-record/components/timer-section';
import '@/containers/interview-record/components/answer-section/style.css';
import CompleteRecordButton from '@/containers/interview-record/components/compelete-record-button';
import NextQuestionButton from '@/containers/interview-record/components/next-question-button';
import QuestionSection from '@/containers/interview-record/components/question-section';
import AnswerSection from '@/containers/interview-record/components/answer-section';
import RecreateRecordQuestionButton from '@/containers/interview-record/components/recreate-record-question-button';
import { notFound } from 'next/navigation';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';

const RecordInterviewPage = () => {
  const { firstQuestion } = usePresettingDataStore();

  if (!firstQuestion?.name) {
    return notFound();
  }

  return (
    <div className="mx-auto flex h-screen min-w-[30rem] max-w-screen-lg flex-col items-center justify-center overflow-scroll rounded-3xl bg-text-20 bg-opacity-20 px-10 py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex w-full justify-center py-[1.5rem] text-[2rem]">
        <QuestionSection />
      </div>
      <div className="relative flex w-full flex-col lg:px-[5rem]">
        <TimerSection />
        <RecoderSection />
        <AnswerSection />
      </div>
      <div className="flex items-end justify-center gap-16 pt-8">
        <RecreateRecordQuestionButton />
        <CompleteRecordButton />
        <NextQuestionButton />
      </div>
    </div>
  );
};

export default RecordInterviewPage;
