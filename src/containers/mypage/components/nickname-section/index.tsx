'use client';

import Modal from '@/shared/components/modal';
import { useState } from 'react';
import NicknameEditSection from './nickname-edit-section';

interface NickNameSectionProps {
  originalNickname: string;
}
const NickNameSection = ({ originalNickname }: NickNameSectionProps) => {
  const [editNicknameModalOn, setEditNicknameModalOn] = useState(false);
  const [nickname, setNickname] = useState(originalNickname);

  return (
    <div className="mb-[2rem] flex h-full w-full justify-center whitespace-pre text-[1.9rem] tablet:min-h-[10rem] tablet:w-[60rem] tablet:gap-[2rem] tablet:text-[3rem]">
      <div className="relative flex flex-col items-center justify-center laptop:flex-row">
        <div className="flex gap-[0.5rem]">
          <button
            className="font-bold underline underline-offset-8"
            onClick={() => setEditNicknameModalOn(true)}
          >
            {nickname}
          </button>
          님의
        </div>
        <span> 면접을 응원합니다 💪</span>
      </div>
      <Modal
        visible={editNicknameModalOn}
        onClose={() => setEditNicknameModalOn(false)}
      >
        <NicknameEditSection
          currentNickname={nickname}
          closeModal={() => setEditNicknameModalOn(false)}
          onChangeNickname={(name) => setNickname(name)}
        />
      </Modal>
    </div>
  );
};

export default NickNameSection;
