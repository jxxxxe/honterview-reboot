import { SearchIcon } from '@/components/icon';
import Input from '@/components/input';

import { AutocompleteInputProps } from './type';
import useAutocompleteInput from './useAutocompleteInput';

const KEY_LIST = ['ArrowDown', 'ArrowUp', 'Enter'];

const AutocompleteInput = ({
  totalDatas,
  selectedList,
  placeholder,
}: AutocompleteInputProps) => {
  const {
    handleChangeInput,
    handleInputClick,
    isListVisible,
    inputValue,
    handleKeyEvent,
  } = useAutocompleteInput({
    totalDatas,
    selectedList,
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (KEY_LIST.includes(e.key) && !e.nativeEvent.isComposing) {
      handleKeyEvent(e.key);
    }
  };

  return (
    <Input
      className="flex h-[3.5rem] w-full gap-[1rem] pl-[0.5rem] outline-none"
      onKeyDown={onKeyDown}
    >
      <div className="autoInput flex w-full gap-[0.5rem] overflow-x-scroll">
        <Input.Text
          className="h-[2rem] text-small"
          onChange={handleChangeInput}
          value={inputValue}
          onClick={handleInputClick}
          placeholder={placeholder ?? '검색어를 입력하세요'}
        />
      </div>
      {!isListVisible && <SearchIcon />}
    </Input>
  );
};

export default AutocompleteInput;
