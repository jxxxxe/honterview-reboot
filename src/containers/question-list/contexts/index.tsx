'use client';

import { notify } from '@/shared/components/toast';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import QuestionListContextTypes from './type';
import getCategoryList from '@/shared/services/category/get-category-list';
import {
  getCachedQuestionList,
  getQuestionCount,
} from '@/shared/services/question-list/get-question-list';
import { CATEGORY_SELECTED_COUNT } from '@/shared/constants/question';
import { apiFetch } from '@/shared/utils/apiFetch';

const QuestionListContext = createContext<QuestionListContextTypes>({
  categoryList: [],
  questionList: [],
  orderBy: 'recent',
  setOrderBy: () => {},
  selectedTagList: [],
  setSelectedTagList: () => {},
  nowPage: 0,
  setNowPage: () => {},
  totalSize: 0,
  searchQuery: '',
  setSearchQuery: () => {},
  handleTagClick: () => {},
  handleTagCancelClick: () => {},
});

const QuestionListProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);

  const [orderBy, setOrderBy] = useState('recent');

  const [questionList, setQuestionList] = useState([]);

  const [nowPage, setNowPage] = useState(1);
  const [totalSize, setTotalSize] = useState(0);

  //카테고리 세팅
  useEffect(() => {
    const fetchData = async () => {
      const categoryListData = await getCategoryList();
      setCategoryList(
        categoryListData
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name),
          )
          .map((category) => category.name),
      );
    };
    fetchData();
  }, []);

  //검색어, 카테고리, 정렬 바뀔 때마다 페이지 1로 & 전체개수 구함
  useEffect(() => {
    setNowPage(1);

    const fetchData = async () => {
      const questionListCount = await getQuestionCount(
        searchQuery,
        selectedTagList,
      );
      setTotalSize(questionListCount);
    };

    fetchData();
  }, [searchQuery, selectedTagList, orderBy]);

  //검색어, 카테고리, 정렬, 페이지 바뀔 때마다 페치
  useEffect(() => {
    const fetchData = async () => {
      const before = new Date();

      // const questionListData = await getCachedQuestionList(
      //   searchQuery,
      //   categoryList,
      //   orderBy,
      // );

      const searchParams = new URLSearchParams({
        categories: selectedTagList.join(','),
        order: orderBy,
        query: searchQuery,
        page: nowPage + '',
      });

      const questionListData = await apiFetch(
        `api/questions?${searchParams.toString()}`,
      );
      setQuestionList(questionListData);

      const after = new Date();
      console.log(
        `걸린 시간 : ${(after.getTime() - before.getTime()) / 1000}초`,
      );
    };

    fetchData();
  }, [nowPage, searchQuery, selectedTagList, orderBy]);

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
      searchQuery,
      setSearchQuery,

      categoryList,
      selectedTagList,
      setSelectedTagList,

      orderBy,
      setOrderBy,

      questionList,

      nowPage,
      setNowPage,
      totalSize,

      handleTagClick,
      handleTagCancelClick,
    }),
    [
      searchQuery,
      setSearchQuery,
      categoryList,
      selectedTagList,
      setSelectedTagList,
      orderBy,
      setOrderBy,
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
