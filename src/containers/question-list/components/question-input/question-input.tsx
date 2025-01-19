'use client';

import AutocompleteSearch from '@/shared/components/autocomplete-search';
import { useQuestionList } from '../../contexts';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import InputIcon from '@/shared/components/input-icon';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { getCachedQuestionList } from '@/shared/services/question-list/get-question-list';
import { apiFetch } from '@/shared/utils/apiFetch';

const QuestionInput = () => {
  const { setSearchQuery } = useQuestionList();
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const questionListData = await apiFetch('api/questions');
      setQuestionList(
        questionListData.map((q) => ({
          id: q.id,
          name: q.content,
        })),
      );
    };
    fetchData();
  }, []);

  const { push } = useRouter();

  const onSelectItem = (value) => {
    push(`/questions/${value.id}`);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const searchWord = formData.get('question-list-input') as string;
    setSearchQuery(searchWord);
  };

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-[50rem]"
      >
        <AutocompleteSearch
          className="w-[50rem]"
          placeholder="질문 내용을 검색하세요."
          totalDatas={questionList}
          onSelectItem={onSelectItem}
          name="question-list-input"
        />
        <InputIcon className="bg-white">
          <MagnifyingGlassCircleIcon className="size-16 text-primaries-primary" />
        </InputIcon>
      </form>
    </div>
  );
};

export default QuestionInput;
