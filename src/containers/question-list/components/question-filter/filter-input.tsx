import Input from '@/shared/components/input';
import InputIcon from '@/shared/components/input-icon';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export interface FilterInputProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  handleTagClick: (tag: string) => void;
  filteredData: {
    name: string;
    id: number;
  }[];
}

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
      const tagList = filteredData
        .map(({ name }) =>
          filteredData.length === 1 ||
          (name.length === searchQuery.length &&
            name.toLowerCase().includes(searchQuery.toLowerCase()))
            ? name
            : null,
        )
        .filter((name) => name !== null) as string[];

      if (tagList.length === 1) {
        handleTagClick(tagList[0]);
      }
    }
  };

  return (
    <div className="relative">
      <Input
        className="h-[4rem] w-[20rem] flex-none rounded-[1rem] px-[12px] py-[5px] text-[1.6rem]"
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyDown}
        value={searchQuery}
        placeholder="기술 검색"
      />
      <InputIcon>
        <MagnifyingGlassIcon className="size-[3rem] text-[#e5e7eb]" />
      </InputIcon>
    </div>
  );
};

export default FilterInput;
