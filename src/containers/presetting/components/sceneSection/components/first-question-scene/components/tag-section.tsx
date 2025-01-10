import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AutocompleteSearch from '@/components/autocompleteSearch';

import Tag from '@/components/tag';
import { notify } from '@/components/toast';

import SectionAnimationWrapper from '../../section-animation-wrapper';
import usePresettingDataStore from '@/stores/presetting/usePresettingDataStore';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const MAX_TAG_COUNT = 3;

const TagSection = () => {
  const {
    firstQuestionTags,
    addFirstQuestionTag,
    removeFirstQuestionTag,
    setFirstQuestion,
  } = usePresettingDataStore();

  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    setIsLoading(false);
  }, []);

  return (
    <SectionAnimationWrapper className="flex w-full flex-col gap-[1rem]">
      <div className="flex gap-[0.5rem]">
        <h2 className="text-large font-semibold">카테고리 선택</h2>
        <p className="flex items-end text-extraSmall text-text-60">최대 3개</p>
      </div>
      <div className="h-[4rem] w-full">
        {isLoading ? (
          // <Loading />
          <></>
        ) : (
          <AutocompleteSearch
            totalDatas={categoryList}
            selectedList={firstQuestionTags}
            onSelectItem={(tag) => {
              if (firstQuestionTags.length >= MAX_TAG_COUNT) {
                notify('warning', '제한된 태그 개수를 초과하였습니다');
                return;
              }
              addFirstQuestionTag(tag);
            }}
            placeholder="예) React"
          />
        )}
      </div>
      <div className="flex h-[3.4rem] w-full gap-[1rem]">
        {firstQuestionTags.map((tag) => (
          <Tag key={uuidv4()}>
            {tag.name}
            <button
              type="button"
              key={uuidv4()}
              onClick={() => {
                removeFirstQuestionTag(tag);
                setFirstQuestion(undefined);
              }}
            >
              <XMarkIcon className="h-[1.5rem] text-white" />
            </button>
          </Tag>
        ))}
      </div>
    </SectionAnimationWrapper>
  );
};

export default TagSection;
