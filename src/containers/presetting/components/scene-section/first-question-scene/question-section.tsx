import { useEffect, useState } from 'react';

import AutocompleteSearch from '@/shared/components/autocomplete-search';
import { AutocompleteDataType } from '@/shared/components/autocomplete-search/type';

import Tag from '@/shared/components/tag';

import SectionAnimationWrapper from '../section-animation-wrapper';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getCachedQuestionList } from '@/shared/services/question-list/get-question-list';
import Input from '@/shared/components/input';

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

    const fetchData = async () => {
      const questionListData = await getCachedQuestionList(
        '',
        firstQuestionTagList,
        'like',
      );
      setQuestionList(
        questionListData.map((question) => ({
          id: question.id,
          name: question.content,
        })),
      );
    };

    fetchData();

    setIsLoading(false);
  }, [firstQuestionTagList]);

  return (
    <SectionAnimationWrapper className="flex w-full flex-col gap-[1rem]">
      <h2 className="text-large font-semibold">질문 선택</h2>
      <div className="h-[4rem] w-full">
        {isLoading ? (
          <Input
            placeholder="Loading.."
            disabled={true}
          />
        ) : (
          <AutocompleteSearch
            totalDatas={questionList}
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
