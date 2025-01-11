'use client';

import {
  dummyCategoryList,
  dummyQuestionsList,
} from '@/app/questions/dummydata';
import { notify } from '@/shared/components/toast';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import QuestionListContextTypes, { sortType } from './type';
import { ICategory } from '@/types/category-list';

const QuestionListContext = createContext<QuestionListContextTypes>({
  categoryList: [],
  setCategoryList: () => {},
  questionList: [],
  setQuestionList: () => {},
  sortType: '최신순',
  setSortType: () => {},
  selectedTagList: [],
  setSelectedTagList: () => {},
  nowPage: 1,
  setNowPage: () => {},
  totalSize: 0,
  setTotalSize: () => {},
  questionsInput: '',
  setQuestionsInput: () => {},
  handleTagClick: () => {},
  handleTagDeleteClick: () => {},
});

const QuestionListProvider = ({ children }) => {
  const [categorieList, setCategoryList] = useState<ICategory[]>([]);
  const [questionList, setQuestionList] = useState([]);
  const [sortType, setSortType] = useState<sortType>('최신순');
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
  const [nowPage, setNowPage] = useState<number>(1);
  const [totalSize, setTotalSize] = useState<number>(0);
  const [questionsInput, setQuestionsInput] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const categoryListData = dummyCategoryList;
      setCategoryList(
        categoryListData.data.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name),
        ),
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    setNowPage(1);
  }, [categorieList, sortType, selectedTagList, questionsInput]);

  useEffect(() => {
    const fetchData = async () => {
      const questionsListData = dummyQuestionsList;
      setQuestionList(questionsListData.data.data);
      setTotalSize(questionsListData.data.totalElements);
    };

    fetchData();
  }, [nowPage, questionsInput, selectedTagList, sortType]);

  const handleTagClick = (tag: string) => {
    if (selectedTagList.length < 3) {
      setSelectedTagList([...selectedTagList, tag]);
    } else if (selectedTagList.length >= 3) {
      notify('warning', '3개 이상 선택이 불가합니다');
    }
  };

  const handleTagDeleteClick = (tag: string) => {
    setSelectedTagList((prev) => prev.filter((name) => name !== tag));
  };

  const value = useMemo(
    () => ({
      categoryList: categorieList,
      setCategoryList,
      questionList,
      setQuestionList,
      sortType,
      setSortType,
      selectedTagList,
      setSelectedTagList,
      nowPage,
      setNowPage,
      totalSize,
      setTotalSize,
      questionsInput,
      setQuestionsInput,
      handleTagClick,
      handleTagDeleteClick,
    }),
    [
      categorieList,
      setCategoryList,
      questionList,
      setQuestionList,
      sortType,
      setSortType,
      selectedTagList,
      setSelectedTagList,
      nowPage,
      setNowPage,
      totalSize,
      setTotalSize,
      questionsInput,
      setQuestionsInput,
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
