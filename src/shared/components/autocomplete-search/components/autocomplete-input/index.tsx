import Input from '@/shared/components/input';

import useAutocompleteInput from './useAutocompleteInput';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { AutocompleteDataType } from '../../type';
import { twMerge } from 'tailwind-merge';
import InputIcon from '@/shared/components/input-icon';

export interface AutocompleteInputProps {
  totalDatas: AutocompleteDataType[];
  selectedList?: AutocompleteDataType[];
  placeholder?: string;
  className?: string;
  name?: string;
}

const KEY_LIST = ['ArrowDown', 'ArrowUp', 'Enter'];

const AutocompleteInput = ({
  totalDatas,
  selectedList,
  placeholder,
  className,
  name,
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
    <div className="relative">
      <Input
        className={twMerge(`autoInput text-small ${className}`)}
        onChange={handleChangeInput}
        value={inputValue}
        onClick={handleInputClick}
        placeholder={placeholder ?? '검색어를 입력하세요'}
        onKeyDown={onKeyDown}
        name={name}
      />
      {!isListVisible && (
        <InputIcon isButton={false}>
          <MagnifyingGlassIcon className="size-10" />
        </InputIcon>
      )}
    </div>
  );
};

export default AutocompleteInput;
