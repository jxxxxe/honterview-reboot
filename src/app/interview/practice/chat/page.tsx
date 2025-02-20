'use client';

import CompleteChatButton from '@/containers/interview-chat/components/compelete-chat-button';
import ChatInterviewSection from '@/containers/interview-chat/components/chat-interview-section';
import { notFound } from 'next/navigation';
import AnswerInputBox from '@/containers/interview-chat/components/answer-input-box';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { useEffect } from 'react';

const InterviewChatPage = () => {
  const { firstQuestion } = usePresettingDataStore();

  if (!firstQuestion?.name) {
    return notFound();
  }
  useEffect(() => {
    console.log('page', firstQuestion);
  }, []);
  return (
    <div className="mx-auto flex h-screen w-full transform flex-col items-center gap-10 overflow-hidden rounded-3xl bg-text-20 bg-opacity-20 p-[3rem] pt-0 text-[1.6rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] tablet:max-w-[80rem]">
      <div className="fixed flex w-full justify-end bg-white py-[1rem] pr-[4rem]">
        <CompleteChatButton />
      </div>
      <ChatInterviewSection />
      <AnswerInputBox />
    </div>
  );
};

export default InterviewChatPage;
