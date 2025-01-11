'use client';

import AutocompleteSearch from '@/shared/components/autocomplete-search';
import { dummyQuestions } from '../../../presetting/components/scene-section/components/first-question-scene/dummydata';
import { useQuestionList } from '../../contexts';
import { redirect } from 'next/navigation';
import { getSearchResultList } from './actions';
import { FormEvent } from 'react';
import InputIcon from '@/shared/components/input-icon';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

const QuestionInput = () => {
  const { setQuestionsInput, setQuestionList } = useQuestionList();
  const onSelectItem = (value) => {
    setQuestionsInput(value.name);
    redirect(`/questions/${value.id}`);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const searchWord = formData.get('question-list-input') as string;

    console.log(searchWord);
    const questionList = await getSearchResultList(searchWord);
    setQuestionList(questionList);
  };

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <form
        onSubmit={handleSubmit}
        className="relative"
      >
        <AutocompleteSearch
          className="w-[50rem]"
          placeholder="질문 내용을 검색하세요."
          totalDatas={dummyQuestions}
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
