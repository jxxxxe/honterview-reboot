import { IGetQuestions } from '@/shared/types/question';

export default interface QuestionListContextTypes {
  categoryList: string[];
  questionList: IGetQuestions[];
  orderBy: string;
  setOrderBy: (value: string) => void;
  selectedTagList: string[];
  setSelectedTagList: (value: string[]) => void;
  nowPage: number;
  setNowPage: (value: number) => void;
  totalSize: number;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleTagClick: (value: string) => void;
  handleTagCancelClick: (value: string) => void;
  isCategoryLoading: boolean;
  isQuestionListLoading: boolean;
}
