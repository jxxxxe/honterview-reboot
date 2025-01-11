'use client';

import './style.css';

import AutocompleteBox from './components/autocomplete-box';
import AutocompleteContainer from './components/autocomplete-container';
import AutocompleteCreateItem from './components/autocomplete-create-item';
import AutocompleteInput from './components/autocomplete-input';
import AutocompleteProvider from './contexts';
import { AutocompleteDataType } from './type';

interface AutocompleteSearchProps {
  totalDatas: AutocompleteDataType[];
  onSelectItem: (value: AutocompleteDataType) => void;
  placeholder?: string;
  selectedList?: AutocompleteDataType[];
  canCreate?: boolean;
  className?: string;
  name?: string;
}

const AutocompleteSearch = ({
  totalDatas,
  placeholder,
  onSelectItem,
  selectedList,
  canCreate,
  className,
  name,
}: AutocompleteSearchProps) => {
  return (
    <AutocompleteProvider onSelectItem={onSelectItem}>
      <AutocompleteContainer>
        <AutocompleteInput
          totalDatas={totalDatas}
          selectedList={selectedList}
          placeholder={placeholder}
          className={className}
          name={name}
        />
        {canCreate && <AutocompleteCreateItem />}
        <AutocompleteBox />
      </AutocompleteContainer>
    </AutocompleteProvider>
  );
};

export default AutocompleteSearch;
