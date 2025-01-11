import { ICategory } from '@/types/category-list';
import { IQuestion } from '@/types/question-list';

export default interface QuestionListContextTypes {
  categoryList: ICategory[];
  setCategoryList: (value: ICategory[]) => void;
  questionList: IQuestion[];
  setQuestionList: (value: IQuestion[]) => void;
  sortType: sortType;
  setSortType: (value: sortType) => void;
  selectedTagList: string[];
  setSelectedTagList: (value: string[]) => void;
  nowPage: number;
  setNowPage: (value: number) => void;
  totalSize: number;
  setTotalSize: (value: number) => void;
  questionsInput: string;
  setQuestionsInput: (value: string) => void;
  handleTagClick: (value: string) => void;
  handleTagDeleteClick: (value: string) => void;
}

export type sortType = '최신순' | '좋아요순';
