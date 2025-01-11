'use client';

import { useQuestionList } from '@/containers/question-list/contexts';
import { sortType } from '@/containers/question-list/contexts/type';
import Select from '@/shared/components/select';

const QuestionSort = () => {
  const { sortType, setSortType } = useQuestionList();
  return (
    <div className="flex justify-end">
      <Select
        options={['최신순', '좋아요순']}
        value={sortType}
        className="py-1"
        onChange={(e) => setSortType(e.target.value as sortType)}
      />
    </div>
  );
};

export default QuestionSort;
