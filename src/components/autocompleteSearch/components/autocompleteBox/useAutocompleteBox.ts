import { useAutocomplete } from '../../contexts';

const useAutocompleteBox = () => {
  const {
    autocompleteList,
    isListVisible,
    keyboardIndex,
    inputValue,
    handleItemClick,
    autoItemRef,
    autoBoxRef,
  } = useAutocomplete();

  const handleKeywordtHighlight = (name: string) => {
    const inputValueTrim = inputValue.trim();
    const nameArray = Array.from(name);
    const index = name.toLowerCase().indexOf(inputValueTrim.toLowerCase());

    if (index === -1) {
      return { prevWord: name, keyword: null, postWord: null };
    }

    const prevWord = nameArray.slice(0, index).join('');
    const keyword = nameArray
      .slice(index, index + inputValueTrim.length)
      .join('');
    const postWord = nameArray.slice(index + inputValueTrim.length).join('');

    return { prevWord, keyword, postWord };
  };

  return {
    autoBoxRef,
    autoItemRef,
    autocompleteList,
    isListVisible,
    keyboardIndex,
    inputValue,
    handleKeywordtHighlight,
    handleItemClick,
  };
};

export default useAutocompleteBox;
