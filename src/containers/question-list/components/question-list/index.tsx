'use client';

import { v4 as v4uuid } from 'uuid';
import QuestionItem from './question-item';
import { useQuestionList } from '../../contexts';
import { cachedIsLikedQuestion } from '@/shared/services/question/like-question';

const QuestionList = () => {
  const { questionList } = useQuestionList();

  return questionList.length === 0 ? (
    <p className="text-center text-extraLarge text-text-60">
      검색 결과가 없습니다.
    </p>
  ) : (
    questionList.map(({ id, content, categories }) => {
      const categoryNames = categories.map((category) => category.name);
      return (
        <QuestionItem
          key={v4uuid()}
          id={id}
          content={content}
          categoryNames={categoryNames}
        />
      );
    })
  );
};

export default QuestionList;
