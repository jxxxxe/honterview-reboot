'use client';

import Select from '@/shared/components/select';
import { useState } from 'react';
import { useQuestionList } from '../contexts';

const QuestionSort = () => {
  const [sortType, setSortType] = useState('최신순');
  const { setOrderBy } = useQuestionList();

  const onSelectSort = (e) => {
    const orderType = e.target.value;

    if (orderType === '최신순') {
      setOrderBy('recent');
    } else if (orderType === '좋아요순') {
      setOrderBy('like');
    }

    setSortType(orderType);
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
