'use client';

import { useEffect, useState } from 'react';

import { notify } from '@/components/toast';
import QuestionFilter from '@/containers/questionsList/components/questionFilter';
import QuestionInput from '@/containers/questionsList/question-input';
import QuestionList from '@/containers/questionsList/components/questionList';
import QuestionSort from '@/containers/questionsList/components/questionList/components/question-sort';
import { dummyCategories, dummyQuestionsList } from '../dummydata';

const QuestionsListPage = () => {
  const [categories, setCategories] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [listSort, setListSort] = useState<string>('최신순');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [nowPage, setNowPage] = useState<number>(1);
  const [totalSize, setTotalSize] = useState<number>(0);
  const [questionsInput, setQuestionsInput] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = dummyCategories;
      setCategories(
        categoriesData.data.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name),
        ),
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    setNowPage(1);
  }, [categories, listSort, selectedTags, questionsInput]);

  useEffect(() => {
    const fetchData = async () => {
      const questionsListData = dummyQuestionsList;
      setQuestionsList(questionsListData.data.data);
      setTotalSize(questionsListData.data.totalElements);
    };

    fetchData();
  }, [nowPage, questionsInput, selectedTags, listSort]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag),
      );
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    } else if (selectedTags.length >= 3) {
      notify('warning', '3개 이상 선택이 불가합니다');
    }
  };

  return (
    <section>
      <div className="flex min-w-[40rem] flex-col gap-8 px-20 py-8">
        <QuestionInput setQuestionsInput={setQuestionsInput} />
        <QuestionFilter
          handleTagClick={handleTagClick}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          categories={categories}
        />
        <QuestionSort
          listSort={listSort}
          setListSort={setListSort}
        />
        {totalSize === 0 ? (
          <p className="text-center text-extraLarge text-text-60">
            검색 결과가 없습니다.
          </p>
        ) : (
          <QuestionList
            handleTagClick={handleTagClick}
            questionsList={questionsList}
          />
        )}
        {/* {totalSize !== 0 && (
          <QuestionPageination
            totalSize={totalSize}
            nowPage={nowPage}
            setNowPage={setNowPage}
          />
        )} */}
      </div>
    </section>
  );
};

export default QuestionsListPage;
