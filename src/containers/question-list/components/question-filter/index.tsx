'use client';

import { useEffect, useState } from 'react';

import FilterInput from './filter-input';
import Toggle from './toggle';
import { dummyCategoryList } from '@/app/questions/dummydata';
import { useQuestionList } from '../../contexts';
import SelectedTagList from './selected-tags';
import UnSelectedTagList from './unselected-tags';

const QuestionFilter = () => {
  const [toggle, setToggle] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    categoryList,
    setCategoryList,
    selectedTagList,
    setSelectedTagList,
    handleTagClick,
    handleTagDeleteClick,
  } = useQuestionList();

  useEffect(() => {
    const fetchData = async () => {
      const categoryListData = dummyCategoryList;
      setCategoryList(
        categoryListData.data.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name),
        ),
      );
    };

    fetchData();
  }, []);

  const filteredData = categoryList.filter(
    (tag) =>
      tag.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedTagList
        .map((tag) => tag.toLowerCase())
        .includes(tag.name.toLowerCase()),
  );

  return (
    <div>
      <div
        className="relative flex gap-4"
        style={toggle ? { overflow: 'hidden' } : { flexWrap: 'wrap' }}
      >
        <FilterInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredData={filteredData}
          handleTagClick={handleTagClick}
        />
        <UnSelectedTagList
          filteredData={filteredData}
          handleTagClick={handleTagClick}
        />
        <Toggle
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
      <SelectedTagList
        selectedTagList={selectedTagList}
        setSelectedTagList={setSelectedTagList}
        onDeleteTagClick={handleTagDeleteClick}
      />
    </div>
  );
};

export default QuestionFilter;
