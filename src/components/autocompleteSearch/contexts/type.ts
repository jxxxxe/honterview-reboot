import { RefObject } from 'react';

import { AutocompleteDataType } from '../type';

export interface AutocompleteContextProps {
  autocompleteRef: RefObject<HTMLDivElement> | null;
  autoItemRef: RefObject<HTMLButtonElement> | null;
  autoBoxRef: RefObject<HTMLDivElement> | null;
  isListVisible: boolean;
  isCreateVisible: boolean;
  setIsCreateVisible: (visible: boolean) => void;
  setIsListVisible: (visible: boolean) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  autocompleteList: AutocompleteDataType[];
  setAutocompleteList: (datas: AutocompleteDataType[]) => void;
  keyboardIndex: number;
  setKeyboardIndex: (index: number) => void;
  handleItemClick: (value: AutocompleteDataType) => void;
}

export interface AutocompleteProviderProps extends React.PropsWithChildren {
  onSelectItem: (value: AutocompleteDataType) => void;
}
