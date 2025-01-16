import { ICategory } from '@/shared/types/category-list';
import { IGetQuestions, IQuestion } from '@/shared/types/question-list';

export default interface QuestionListContextTypes {
  categoryList: ICategory[];
  questionList: IGetQuestions[];
  isLikeOrder: boolean;
  setIsLikeOrder: (value: boolean) => void;
  selectedTagList: string[];
  setSelectedTagList: (value: string[]) => void;
  nowPage: number;
  setNowPage: (value: number) => void;
  totalSize: number;
  questionsInput: string;
  setQuestionsInput: (value: string) => void;
  handleTagClick: (value: string) => void;
  handleTagCancelClick: (value: string) => void;
}
