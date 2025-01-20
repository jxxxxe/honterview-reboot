'use client';

import { useEffect, useState } from 'react';

import TagFilterInput from './tag-filter-input';
import TagListToggle from './tag-list-toggle';
import { useQuestionList } from '../../contexts';
import SelectedTagList from './tag-list-selected';
import UnSelectedTagList from './tag-list-unselected';

const QuestionFilter = () => {
  const [toggle, setToggle] = useState(true);
  const [searchTagWord, setSearchTagWord] = useState('');

  const {
    categoryList,
    selectedTagList,
    setSelectedTagList,
    handleTagClick,
    handleTagCancelClick,
    isCategoryLoading,
  } = useQuestionList();

  const filteredData = categoryList.filter(
    (tag) =>
      tag.toLowerCase().includes(searchTagWord.toLowerCase()) &&
      !selectedTagList
        .map((tag) => tag.toLowerCase())
        .includes(tag.toLowerCase()),
  );

  if (isCategoryLoading) {
    return <div className="flex h-full flex-col items-center justify-center" />;
  }

  return (
    <div>
      <div
        className="relative flex gap-4"
        style={toggle ? { overflow: 'hidden' } : { flexWrap: 'wrap' }}
      >
        <TagFilterInput
          searchQuery={searchTagWord}
          setSearchQuery={setSearchTagWord}
          filteredData={filteredData}
          handleTagClick={handleTagClick}
        />
        <UnSelectedTagList
          filteredData={filteredData}
          handleTagClick={handleTagClick}
        />
        <TagListToggle
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
      <SelectedTagList
        selectedTagList={selectedTagList}
        setSelectedTagList={setSelectedTagList}
        onDeleteTagClick={handleTagCancelClick}
      />
    </div>
  );
};

export default QuestionFilter;
