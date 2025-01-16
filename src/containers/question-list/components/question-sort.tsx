'use client';

import Select from '@/shared/components/select';
import { useState } from 'react';
import { useQuestionList } from '../contexts';

const QuestionSort = () => {
  const [sortType, setSortType] = useState('최신순');
  const { setIsLikeOrder } = useQuestionList();

  const onSelectSort = (e) => {
    if (sortType === '좋아요순') {
      setIsLikeOrder(false);
    }

    if (sortType === '최신순') {
      setIsLikeOrder(true);
    }
    setSortType(e.target.value);
  };

  return (
    <div className="flex justify-end">
      <Select
        options={['최신순', '좋아요순']}
        value={sortType}
        className="py-1"
        onChange={onSelectSort}
      />
    </div>
  );
};

export default QuestionSort;
