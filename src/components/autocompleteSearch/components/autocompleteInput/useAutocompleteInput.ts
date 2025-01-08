import { useEffect, useRef } from 'react';

import { useAutocomplete } from '../../contexts';
import { AutocompleteInputProps } from './type';

const useAutocompleteInput = ({
  totalDatas,
  selectedList,
}: AutocompleteInputProps) => {
  const {
    autoBoxRef,
    autoItemRef,
    isListVisible,
    setIsListVisible,
    setInputValue,
    inputValue,
    autocompleteList,
    keyboardIndex,
    setKeyboardIndex,
    setAutocompleteList,
    setIsCreateVisible,
    handleItemClick,
  } = useAutocomplete();

  useEffect(() => {
    setKeyboardIndex(-1);
    if (!autoBoxRef?.current) {
      return;
    }
    autoBoxRef.current.scrollTop = 0;
  }, [setKeyboardIndex, inputValue, isListVisible, autoBoxRef]);

  const handleInputClick = () => {
    if (!inputValue) {
      setAutocompleteList(
        totalDatas.filter(
          (data) => !selectedList?.some(({ id }) => data.id === id),
        ),
      );
    }
    if (autocompleteList.length > 0 || (!inputValue && totalDatas.length)) {
      setIsListVisible(true);
    }
    setIsCreateVisible(true);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setIsCreateVisible(true);

    if (!value) {
      setIsListVisible(false);
      return;
    }

    const lowerValue = value.trim().toLowerCase();

    const newList = totalDatas.filter(
      (data) =>
        data.name.toLocaleLowerCase().includes(lowerValue) &&
        !selectedList?.some(({ id }) => data.id === id),
    );
    setAutocompleteList(newList);
    newList.length > 0 ? setIsListVisible(true) : setIsListVisible(false);
  };

  const focusIndexInBox = useRef(0);

  const handleKeyEvent = (key: string) => {
    if (keyboardIndex === -1 && key === 'ArrowDown') {
      focusIndexInBox.current = 0;
      setKeyboardIndex(0);
    }
    if (!isListVisible || !autoBoxRef?.current || !autoItemRef?.current) {
      return;
    }
    switch (key) {
      case 'ArrowUp':
        if (focusIndexInBox.current - 1 >= 0) {
          focusIndexInBox.current -= 1;
        } else {
          autoBoxRef.current.scrollTop -= autoItemRef.current.scrollHeight;
        }

        if (keyboardIndex === 0) {
          setKeyboardIndex(autocompleteList.length - 1);
          focusIndexInBox.current = 4;
          autoBoxRef.current.scrollTop = autoBoxRef.current.scrollHeight;
        } else {
          setKeyboardIndex(keyboardIndex - 1);
        }

        break;
      case 'ArrowDown':
        if (focusIndexInBox.current + 1 <= 4) {
          focusIndexInBox.current += 1;
        } else {
          autoBoxRef.current.scrollTop += autoItemRef.current.offsetHeight;
        }

        if (keyboardIndex === autocompleteList.length - 1) {
          setKeyboardIndex(0);
          focusIndexInBox.current = 0;
          autoBoxRef.current.scrollTop = 0;
        } else {
          setKeyboardIndex(keyboardIndex + 1);
        }

        break;
      case 'Enter':
        if (keyboardIndex < 0) {
          return;
        }
        handleItemClick(autocompleteList[keyboardIndex]);
        break;
      default:
        break;
    }
  };

  return {
    handleKeyEvent,
    handleChangeInput,
    handleInputClick,
    isListVisible,
    inputValue,
    keyboardIndex,
    setKeyboardIndex,
    lastKeyboardIndex: autocompleteList.length - 1,
  };
};

export default useAutocompleteInput;
