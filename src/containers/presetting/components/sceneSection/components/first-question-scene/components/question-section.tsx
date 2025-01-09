import { useEffect, useState } from 'react';

import AutocompleteSearch from '@/components/autocompleteSearch';
import { AutocompleteDataType } from '@/components/autocompleteSearch/type';
import { XIcon } from '@/components/icon';
import Loading from '@/components/loading';
import Tag from '@/components/tag';
import { notify } from '@/components/toast';
import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';
import { getQuestionListByCategories } from '@/services/presetting';

import SectionAnimationWrapper from '../../section-animation-wrapper';

export interface QuestionAPIType {
  id: number;
  content: string;
}

const QuestionSection = () => {
  const { setFirstQuestion, firstQuestion, firstQuestionTags } =
    usePresettingDataStore();
  const [questionList, setQuestionList] = useState<AutocompleteDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const categories = firstQuestionTags.map(({ name }) => name).join(',');

    getQuestionListByCategories(categories)
      .then(({ data }) => {
        const questions = data.map((item: QuestionAPIType) => ({
          id: item.id,
          name: item.content,
        }));
        setQuestionList(questions);
      })
      .catch((e) => notify('error', e.message));
    setIsLoading(false);
  }, [firstQuestionTags, firstQuestionTags.length]);

  return (
    <SectionAnimationWrapper className="flex w-full flex-col gap-[1rem]">
      <h2 className="text-large font-semibold">질문 선택</h2>
      <div className="h-[4rem] w-full">
        {isLoading ? (
          <Loading />
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
            <XIcon className="h-[1.5rem] stroke-primaries-primary" />
          </button>
        </Tag>
      )}
    </SectionAnimationWrapper>
  );
};

export default QuestionSection;
