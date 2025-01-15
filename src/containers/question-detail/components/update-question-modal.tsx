'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AutocompleteSearch from '@/shared/components/autocomplete-search';
import { AutocompleteDataType } from '@/shared/components/autocomplete-search/type';
import Button, { ButtonType } from '@/shared/components/button';
import Tag from '@/shared/components/tag';
import { notify } from '@/shared/components/toast';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { RefObject } from 'react';

import { ICategory } from '@/shared/types/category-list';

export interface IProps {
  questionId: number;
  questionTitle: string;
  categoryNames: string[];
  updateModalVisible: boolean;
  categoryList: ICategory[];
  toggleUpdateModalVisible: (
    inputElement?: RefObject<HTMLInputElement>,
  ) => void;
  inputElement: RefObject<HTMLInputElement>;
}

const MAX_TAG_COUNT = 5;

const UpdateQuestionModal = ({
  questionId,
  questionTitle,
  categoryNames,
  updateModalVisible,
  toggleUpdateModalVisible,
  categoryList,
  inputElement,
}: IProps) => {
  const [selectedList, setSelectedList] = useState<AutocompleteDataType[]>(
    categoryNames.map((category) => ({
      id: categoryList.find(({ name }) => name === category)!.id!,
      name: category,
    })),
  );
  const router = useRouter();
  const [titleInput, setTitleInput] = useState(questionTitle);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateClick = async () => {
    setIsLoading(true);

    notify('success', '질문 수정 완료');
    toggleUpdateModalVisible();
    router.refresh();
    setIsLoading(false);
  };

  return (
    <></>
    // <Modal
    //   visible={updateModalVisible}
    //   onClose={toggleUpdateModalVisible}
    //   className="h-[35rem] w-[50rem] rounded-3xl bg-white px-6 py-10"
    // >
    //   <input
    //     onChange={(e) => setTitleInput(e.target.value)}
    //     value={titleInput}
    //     ref={inputElement}
    //     placeholder={questionTitle}
    //     className="mb-7 w-full appearance-none border-b-[1px] border-blue-300 bg-transparent px-5 py-2 text-extraLarge focus:border-b-primaries-active focus:outline-none"
    //   />
    //   <div className="flex flex-col gap-4">
    //     <AutocompleteSearch
    //       totalDatas={categoryList}
    //       selectedList={selectedList}
    //       onSelectItem={(tag) => {
    //         if (selectedList.length >= MAX_TAG_COUNT) {
    //           notify('warning', '제한된 태그 개수를 초과하였습니다');
    //           return;
    //         }
    //         setSelectedList((prevSelectedList) => [...prevSelectedList, tag]);
    //       }}
    //       placeholder="예) React"
    //     />
    //     <div className="flex min-h-[2rem] w-full gap-[1rem]">
    //       {selectedList.map((tag) => (
    //         <Tag key={uuidv4()}>
    //           {tag.name}
    //           <button
    //             type="button"
    //             key={uuidv4()}
    //             onClick={() => {
    //               const newSelectedList = selectedList.filter(
    //                 (prevTag) => prevTag.id !== tag.id,
    //               );
    //               setSelectedList(newSelectedList);
    //             }}
    //           >
    //             <XMarkIcon className="h-[1.5rem] text-white" />
    //           </button>
    //         </Tag>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="mt-[110px] flex gap-5">
    //     <Button
    //       className="w-1/2"
    //       disabled={isLoading}
    //       onClick={handleUpdateClick}
    //     >
    //       수정하기
    //     </Button>
    //     <Button
    //       onClick={() => toggleUpdateModalVisible()}
    //       styleType={ButtonType.Type2}
    //       className="w-1/2"
    //     >
    //       취소
    //     </Button>
    //   </div>
    // </Modal>
  );
};

export default UpdateQuestionModal;
