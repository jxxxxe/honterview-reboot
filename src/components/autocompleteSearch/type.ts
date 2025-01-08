export interface AutocompleteDataType {
  id: number | 'new';
  name: string;
}

export interface AutocompleteSearchProps {
  totalDatas: AutocompleteDataType[];
  onSelectItem: (value: AutocompleteDataType) => void;
  placeholder?: string;
  selectedList?: AutocompleteDataType[];
  canCreate?: boolean;
}
