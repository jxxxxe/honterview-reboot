import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AutocompleteSearch from '@/shared/components/autocomplete-search';

import Tag from '@/shared/components/tag';
import { notify } from '@/shared/components/toast';

import SectionAnimationWrapper from '../section-animation-wrapper';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { XMarkIcon } from '@heroicons/react/24/outline';
import getCategoryList from '@/shared/services/category/get-category-list';
import Input from '@/shared/components/input';

export const MAX_TAG_COUNT = 3;

const TagSection = () => {
  const {
    firstQuestionTagList,
    addFirstQuestionTag,
    removeFirstQuestionTag,
    setFirstQuestion,
  } = usePresettingDataStore();

  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const categoryListData = await getCategoryList();
      setCategoryList(categoryListData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <SectionAnimationWrapper className="flex w-full flex-col gap-[1rem]">
      <div className="flex gap-[0.5rem]">
        <h2 className="text-large font-semibold">카테고리 선택</h2>
        <p className="flex items-end text-extraSmall text-text-60">최대 3개</p>
      </div>
      <div className="h-[4rem] w-full">
        {isLoading ? (
          <Input
            placeholder="Loading.."
            disabled={true}
          />
        ) : (
          <AutocompleteSearch
            totalDatas={categoryList}
            selectedList={firstQuestionTagList}
            onSelectItem={(tag) => {
              if (firstQuestionTagList.length >= MAX_TAG_COUNT) {
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
        {firstQuestionTagList.map((tag) => (
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
