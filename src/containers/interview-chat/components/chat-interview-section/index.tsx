'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { useEffect } from 'react';
import QuestionBubble from './question-bubble';
import RecreateQutestionButton from '../recreate-question-button';
import { v4 } from 'uuid';
import AnswerBubble from './answer-bubble';

const ChatInterviewSection = () => {
  //   const { firstQuestion } = usePresettingDataStore();
  const firstQuestion = { id: 1, name: 'react란 무엇인가요?' };

  const { addQuestion, questionList, answerList } =
    useInterviewQuestionAnswerStore();

  useEffect(() => {
    addQuestion(firstQuestion.name);
  }, []);

  return (
    <div className="mt-[7rem] flex h-full w-full flex-1 flex-col gap-10 overflow-scroll *:gap-10">
      {questionList.map((question, idx) => (
        <div
          key={v4()}
          className="group flex flex-col text-large"
        >
          <div className="flex gap-3">
            <QuestionBubble>{question}</QuestionBubble>
            <RecreateQutestionButton />
          </div>
          <AnswerBubble>{answerList[idx]}</AnswerBubble>
        </div>
      ))}
    </div>
  );
};

export default ChatInterviewSection;
