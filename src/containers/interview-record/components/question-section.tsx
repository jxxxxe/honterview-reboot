'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { useEffect } from 'react';

const QuestionSection = () => {
  const { firstQuestion } = usePresettingDataStore();

  const { currentQuestion, addQuestion } = useInterviewQuestionAnswerStore();

  useEffect(() => {
    addQuestion(firstQuestion.name);
  }, []);

  return (
    <div className="h-fit rounded-lg bg-background-20 p-3">
      Q.
      <span className="font-semibold"> {currentQuestion}</span>
    </div>
  );
};

export default QuestionSection;
