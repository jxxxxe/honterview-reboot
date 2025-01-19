'use client';

import Pagination from '@/shared/components/pagination';
import { useQuestionList } from '../contexts';
import { QUESTION_COUNT_IN_PAGE } from '../constants';

const QuestionPageination = () => {
  const { totalSize, nowPage, setNowPage } = useQuestionList();

  const pageHandler = (page: number) => {
    setNowPage(page);
  };

  return (
    totalSize > 0 && (
      <Pagination
        className="my-10 flex justify-center px-[1rem]"
        defaultPage={nowPage}
        limit={QUESTION_COUNT_IN_PAGE}
        total={totalSize}
        onPageChange={pageHandler}
      />
    )
  );
};

export default QuestionPageination;
