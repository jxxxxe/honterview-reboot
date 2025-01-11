'use client';

import Pagination from '@/shared/components/pagination';
import { useQuestionList } from '../contexts';

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
        limit={5}
        total={totalSize}
        onPageChange={pageHandler}
      />
    )
  );
};

export default QuestionPageination;
