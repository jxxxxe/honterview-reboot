'use client';

import { notify } from '@/shared/components/toast';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import QuestionListContextTypes from './type';
import { ICategory } from '@/shared/types/category-list';
import getCategoryList from '@/shared/services/category/get-category-list';
import {
  getCachedQuestionList,
  getQuestionCount,
} from '@/shared/services/question-list/get-question-list';
import { CATEGORY_SELECTED_COUNT } from '@/shared/constants/question';
import QuestionInput from '../components/question-input/question-input';

const QuestionListContext = createContext<QuestionListContextTypes>({
  categoryList: [],
  questionList: [],
  isLikeOrder: false,
  setIsLikeOrder: () => {},
  selectedTagList: [],
  setSelectedTagList: () => {},
  nowPage: 0,
  setNowPage: () => {},
  totalSize: 0,
  questionsInput: '',
  setQuestionsInput: () => {},
  handleTagClick: () => {},
  handleTagCancelClick: () => {},
});

const QuestionListProvider = ({ children }) => {
  const [questionsInput, setQuestionsInput] = useState('');

  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);

  const [isLikeOrder, setIsLikeOrder] = useState(false);

  const [questionList, setQuestionList] = useState([]);

  const [nowPage, setNowPage] = useState(0);
  const [totalSize, setTotalSize] = useState(0);

  //맨 처음 카테고리 패치
  useEffect(() => {
    const fetchCategoryList = async () => {
      const categoryListData = await getCategoryList();
      setCategoryList(
        categoryListData.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name),
        ),
      );
      const questionListCount = await getQuestionCount();
      setTotalSize(questionListCount);
    };

    fetchCategoryList();
  }, []);

  //검색어, 카테고리, 정렬 바뀔 때마다 페이지 갱신
  useEffect(() => {
    setNowPage(0);

    const fetchData = async () => {
      const questionListData = await getCachedQuestionList(
        questionsInput,
        categoryList,
        isLikeOrder,
      );
      setQuestionList(questionListData);

      const questionListCount = await getQuestionCount(
        questionsInput,
        categoryList,
      );
      setTotalSize(questionListCount);
    };
    fetchData();
  }, [questionsInput, selectedTagList, isLikeOrder]);

  const handleTagClick = (tag: string) => {
    if (selectedTagList.length < CATEGORY_SELECTED_COUNT) {
      setSelectedTagList([...selectedTagList, tag]);
    } else {
      notify('warning', '3개 이상 선택이 불가합니다');
    }
  };

  const handleTagCancelClick = (tag: string) => {
    setSelectedTagList((prev) => prev.filter((name) => name !== tag));
  };

  const value = useMemo(
    () => ({
      questionsInput,
      setQuestionsInput,

      categoryList,
      selectedTagList,
      setSelectedTagList,

      isLikeOrder,
      setIsLikeOrder,

      questionList,

      nowPage,
      setNowPage,
      totalSize,

      handleTagClick,
      handleTagCancelClick,
    }),
    [
      questionsInput,
      setQuestionsInput,
      categoryList,
      selectedTagList,
      setSelectedTagList,
      isLikeOrder,
      setIsLikeOrder,
      questionList,
      nowPage,
      setNowPage,
      totalSize,
      handleTagClick,
      handleTagCancelClick,
    ],
  );

  return (
    <QuestionListContext.Provider value={value}>
      {children}
    </QuestionListContext.Provider>
  );
};

export default QuestionListProvider;
export const useQuestionList = () => useContext(QuestionListContext);
