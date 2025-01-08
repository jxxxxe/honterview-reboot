import { AutocompleteDataType } from '../../type';

export interface AutocompleteInputProps {
  totalDatas: AutocompleteDataType[];
  selectedList?: AutocompleteDataType[];
  placeholder?: string;
}
