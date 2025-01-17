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
import { apiFetch } from '@/shared/utils/fetch';

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

  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);

  const [orderBy, setOrderBy] = useState('recent');

  const [questionList, setQuestionList] = useState([]);

  const [nowPage, setNowPage] = useState(0);
  const [totalSize, setTotalSize] = useState(0);

  //맨 처음 질문,카테고리,질문개수 패치
  useEffect(() => {
    const fetchListData = async () => {
      const questionListData = await apiFetch('api/questions');
      setQuestionList(questionListData);

      const categoryListData = await getCategoryList();
      setCategoryList(
        categoryListData.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name),
        ),
      );

      const questionListCount = await getQuestionCount();
      setTotalSize(questionListCount);
    };

    fetchListData();
  }, []);

  //검색어, 카테고리, 정렬 바뀔 때마다 페이지 0으로
  useEffect(() => {
    setNowPage(0);
  }, [searchQuery, selectedTagList, orderBy]);

  //검색어, 카테고리, 정렬, 페이지 바뀔 때마다 페치
  useEffect(() => {
    setNowPage(nowPage);

    const fetchData = async () => {
      // const questionListData = await getCachedQuestionList(
      //   questionsInput,
      //   categoryList,
      //   isLikeOrder,
      // );

      const categoryParams = categoryList.length
        ? `?categories=${categoryList.join(',')}`
        : '';
      const orderByParams = orderBy ? `?order=${orderBy}` : '';
      const searchQueryParams = searchQuery ? `?query=${searchQuery}` : '';
      const pageParams = nowPage >= 0 ? `?page=${nowPage}` : '';

      const questionListData = await apiFetch(
        `api/questions${categoryParams}${orderByParams}${searchQueryParams}${pageParams}`,
      );
      setQuestionList(questionListData);

      const questionListCount = await getQuestionCount(
        searchQuery,
        categoryList,
      );
      setTotalSize(questionListCount);
    };

    fetchData();
  }, [nowPage]);

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
