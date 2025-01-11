import { useEffect, useState } from 'react';

import AutocompleteSearch from '@/shared/components/autocomplete-search';
import { AutocompleteDataType } from '@/shared/components/autocomplete-search/type';

import Tag from '@/shared/components/tag';
import { notify } from '@/shared/components/toast';

import SectionAnimationWrapper from '../../section-animation-wrapper';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { dummyQuestionsList } from '@/app/questions/dummydata';
import { dummyQuestions } from '../dummydata';

export interface QuestionAPIType {
  id: number;
  content: string;
}

const QuestionSection = () => {
  const { setFirstQuestion, firstQuestion, firstQuestionTagList } =
    usePresettingDataStore();
  const [questionList, setQuestionList] = useState<AutocompleteDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const categoryList = firstQuestionTagList.map(({ name }) => name).join(',');
    setQuestionList(
      dummyQuestionsList.data.data.map((item) => ({
        id: item.id,
        name: item.content,
      })),
    );
    // getQuestionListByCategoryList(categoryList)
    //   .then(({ data }) => {
    //     const questions = data.map((item: QuestionAPIType) => ({
    //       id: item.id,
    //       name: item.content,
    //     }));
    //     setQuestionList(questions);
    //   })
    //   .catch((e) => notify('error', e.message));
    setIsLoading(false);
  }, [firstQuestionTagList, firstQuestionTagList.length]);

  return (
    <SectionAnimationWrapper className="flex w-full flex-col gap-[1rem]">
      <h2 className="text-large font-semibold">질문 선택</h2>
      <div className="h-[4rem] w-full">
        {isLoading ? (
          <></>
        ) : (
          <AutocompleteSearch
            totalDatas={dummyQuestions}
            selectedList={firstQuestion ? [firstQuestion] : []}
            onSelectItem={(question) => {
              setFirstQuestion(question);
            }}
            placeholder="예) React의 라이프 사이클에 대해 설명해주세요"
            canCreate
          />
        )}
      </div>
      {firstQuestion && (
        <Tag className="auto-tag w-fit overflow-y-scroll border border-primaries-primary bg-white py-[0.5rem] text-primaries-primary hover:bg-white active:bg-white tablet:max-h-[11rem] tablet:max-w-full">
          <span className="max-h-[8rem] tablet:max-h-[11rem]">
            {firstQuestion.name}
          </span>
          <button
            type="button"
            onClick={() => {
              setFirstQuestion(undefined);
            }}
          >
            <XMarkIcon className="h-[1.5rem] stroke-primaries-primary" />
          </button>
        </Tag>
      )}
    </SectionAnimationWrapper>
  );
};

export default QuestionSection;
