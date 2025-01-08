import { useState } from 'react';

import Input from '@/components/input';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export interface QuestionInputProps {
  setQuestionsInput: (page: string) => void;
}

const QuestionInput = ({ setQuestionsInput }: QuestionInputProps) => {
  const [searchInput, setSearchInput] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setQuestionsInput(searchInput);
    }
  };

  const handleSearchClick = () => {
    setQuestionsInput(searchInput);
  };

  const handleBlur = () => {
    setQuestionsInput(searchInput);
  };

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <h1 className="text-tripleLarge font-bold">질문검색</h1>
      <Input className="w-[50rem] gap-5 rounded-full pl-12 pr-5">
        <Input.Text
          placeholder="질문 내용을 검색하세요."
          value={searchInput}
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearchInput(e.target.value)}
          onBlur={handleBlur}
        />
        <button className="flex h-[40px] w-[40px] flex-none items-center justify-center rounded-full bg-primaries-primary pr-[1px] pt-[2px]">
          <MagnifyingGlassIcon
            onClick={handleSearchClick}
            className="size-[2.5rem] text-white"
          />
        </button>
      </Input>
    </div>
  );
};

export default QuestionInput;
