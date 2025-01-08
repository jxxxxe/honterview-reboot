import { useState } from 'react';

import FilterInput from './components/filter-input';
import SelectedTags from './components/selected-tags';
import Toggle from './components/toggle';
import UnSelectedTags from './components/unselected-tags';
import { IProps } from './types';

const QuestionFilter = ({
  setSelectedTags,
  handleTagClick,
  selectedTags,
  categories,
}: IProps) => {
  const [toggle, setToggle] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = categories.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase()),
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
        <UnSelectedTags
          filteredData={filteredData}
          handleTagClick={handleTagClick}
        />
        <Toggle
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
      <SelectedTags
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handleTagClick={handleTagClick}
      />
    </div>
  );
};

export default QuestionFilter;
