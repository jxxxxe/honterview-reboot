'use client';

import './style/style.css';

import AutocompleteBox from './components/autocompleteBox';
import AutocompleteContainer from './components/autocompleteContainer';
import AutocompleteCreateItem from './components/autocompleteCreateItem';
import AutocompleteInput from './components/autocompleteInput';
import AutocompleteProvider from './contexts';
import { AutocompleteSearchProps } from './type';

const AutocompleteSearch = ({
  totalDatas,
  placeholder,
  onSelectItem,
  selectedList,
  canCreate,
}: AutocompleteSearchProps) => {
  return (
    <AutocompleteProvider onSelectItem={onSelectItem}>
      <AutocompleteContainer>
        <AutocompleteInput
          totalDatas={totalDatas}
          selectedList={selectedList}
          placeholder={placeholder}
        />
        {canCreate && <AutocompleteCreateItem />}
        <AutocompleteBox />
      </AutocompleteContainer>
    </AutocompleteProvider>
  );
};

export default AutocompleteSearch;
