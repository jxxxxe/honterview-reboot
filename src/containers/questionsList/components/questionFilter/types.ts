import { ICategory } from '@/types/categories';

export interface IProps {
  setSelectedTags: (selectedTags: string[]) => void;
  handleTagClick: (tag: string) => void;
  selectedTags: string[];
  categories: ICategory[];
}

export interface FilterInputProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  handleTagClick: (tag: string) => void;
  filteredData: {
    name: string;
    id: number;
  }[];
}

export interface ToggleProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

export interface UnSelectedTagsProps {
  filteredData: {
    name: string;
    id: number;
  }[];
  handleTagClick: (name: string) => void;
}

export interface SelectedTagsProps {
  selectedTags: string[];
  setSelectedTags: (selectedTags: string[]) => void;
  handleTagClick: (name: string) => void;
}
