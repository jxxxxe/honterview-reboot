'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { useEffect } from 'react';

const QuestionSection = () => {
  // const {firstQuestion} = usePresettingDataStore()
  const firstQuestion = {
    id: 1,
    name: '브라우저의 작동 순서를 말해주세요',
  };
  const { currentQuestion, addQuestion, questionList } =
    useInterviewQuestionAnswerStore();

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
