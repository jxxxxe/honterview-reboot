import { useState } from 'react';

import Button, { ButtonType } from '@/shared/components/button';
import Input from '@/shared/components/input';

import { XMarkIcon } from '@heroicons/react/24/outline';

export interface NicknameEditSectionProps {
  currentNickname: string;
  closeModal: () => void;
  onChangeNickname: (nickname: string) => void;
}

const NicknameEditSection = ({
  currentNickname = '하하하',
  closeModal,
  onChangeNickname,
}: NicknameEditSectionProps) => {
  const [nickname, setNickname] = useState(currentNickname);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    closeModal();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  };

  return (
    <div className="relative flex h-[20rem] w-[28rem] flex-col items-center gap-[2rem] rounded-2xl bg-white p-[2rem] text-[1.5rem] tablet:w-[30rem]">
      <h2 className="flex select-none text-[2rem] font-semibold">
        닉네임 변경
      </h2>
      <div className="flex w-full flex-col gap-[0.5rem]">
        <div className="w-full text-[1rem] text-text-40">
          한글(자음+모음), 영문, 숫자 입력 가능 (2~20자)
        </div>
        <form
          className="flex w-full justify-center gap-[0.7rem]"
          onSubmit={onSubmit}
        >
          <div>
            <Input
              className="h-[3rem] w-full border"
              value={nickname}
              onChange={onChange}
            />
            <button
              type="button"
              onClick={() => setNickname('')}
            >
              <XMarkIcon
                className={`stroke-black ${!nickname && 'invisible'}`}
                width="1.5rem"
              />
            </button>
          </div>
          <div className="absolute bottom-[2rem] flex gap-[1rem]">
            <Button
              styleType={ButtonType.Type3}
              className="h-[3rem] w-[7rem] px-0 text-[1.3rem]"
              onClick={closeModal}
            >
              취소
            </Button>
            <Button
              styleType={ButtonType.Type1}
              className="h-[3rem] w-[7rem] px-0 text-[1.3rem]"
              type="submit"
            >
              확인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NicknameEditSection;
