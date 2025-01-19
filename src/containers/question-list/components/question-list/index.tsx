'use client';
import { v4 as v4uuid } from 'uuid';
import QuestionItem from './question-item';
import { apiFetch } from '@/shared/utils/apiFetch';
import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import { useQuestionList } from '../../contexts';

const QuestionList = () => {
  // const questionList = await apiFetch('api/questions');

  const { questionList } = useQuestionList();
  return questionList.length === 0 ? (
    <p className="text-center text-extraLarge text-text-60">
      검색 결과가 없습니다.
    </p>
  ) : (
    questionList.map(({ id, content, categories, likes }) => {
      const categoryNames = categories.map((category) => category.name);
      const likeCount = likes?.length;
      const isLiked = Boolean(
        likes?.find((like) => like.userId == TEMPORARY_USER_ID),
      );
      return (
        <QuestionItem
          key={v4uuid()}
          id={id}
          content={content}
          categoryNames={categoryNames}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      );
    })
  );
};

export default QuestionList;
