import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import useAutocompleteBox from './useAutocompleteBox';

const AutocompleteBox = () => {
  const {
    autoBoxRef,
    autoItemRef,
    isListVisible,
    inputValue,
    autocompleteList,
    keyboardIndex,
    handleKeywordtHighlight,
    handleItemClick,
  } = useAutocompleteBox();

  const [autoItemWidth, setAutoItemWidth] = useState<number | undefined>(0);

  useEffect(() => {
    setAutoItemWidth(0);
  }, [inputValue]);

  useEffect(() => {
    setAutoItemWidth(autoBoxRef?.current?.scrollWidth);
  }, [setAutoItemWidth, autoBoxRef, isListVisible, autoItemWidth]);

  if (!isListVisible) {
    return;
  }

  return (
    <div className="relative">
      <div
        ref={autoBoxRef}
        className="autobox scroll absolute left-0 top-0 z-10 h-fit max-h-[15rem] w-full overflow-scroll border border-t-0 bg-text-20"
      >
        {autocompleteList.map((value, index) => {
          const { prevWord, keyword, postWord } = handleKeywordtHighlight(
            value.name.trim(),
          );

          return (
            <button
              ref={index === keyboardIndex ? autoItemRef : null}
              type="button"
              className={`flex h-[3rem] min-w-full items-center pl-[0.5rem] hover:bg-slate-100 focus:outline-none ${keyboardIndex === index && 'bg-slate-100'}`}
              style={{ width: autoItemWidth }}
              key={uuid()}
              onClick={() => handleItemClick(value)}
            >
              <span className="whitespace-pre">{prevWord}</span>
              <span className="whitespace-pre font-bold text-primaries-primary">
                {keyword}
              </span>
              <span className="whitespace-pre">{postWord}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AutocompleteBox;
