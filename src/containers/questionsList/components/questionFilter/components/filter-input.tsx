import Input from '@/components/input';

import { FilterInputProps } from '../types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const FilterInput = ({
  searchQuery,
  setSearchQuery,
  filteredData,
  handleTagClick,
}: FilterInputProps) => {
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const tags = filteredData
        .map(({ name }) =>
          filteredData.length === 1 ||
          (name.length === searchQuery.length &&
            name.toLowerCase().includes(searchQuery.toLowerCase()))
            ? name
            : null,
        )
        .filter((name) => name !== null) as string[];

      if (tags.length === 1) {
        handleTagClick(tags[0]);
      }
    }
  };

  return (
    <Input className="h-[4rem] w-[20rem] flex-none rounded-[1rem] px-[12px] py-[5px]">
      <Input.Text
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyDown}
        value={searchQuery}
        placeholder="기술 검색"
        className="text-[1.6rem]"
      />
      <MagnifyingGlassIcon className="size-[3rem] cursor-pointer text-[#e5e7eb]" />
    </Input>
  );
};

export default FilterInput;
