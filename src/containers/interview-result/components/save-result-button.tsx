'use client';

import { useState } from 'react';

import { patchInterviewVisibility } from '@/libs/actions/interview';

import { useAnswerVisibilityStatusStore } from '../stores';
import { notify } from '@/shared/components/toast';
import Button from '@/shared/components/button';

export interface IProps {
  interviewId: number;
}

const SaveResultButton = ({ interviewId }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { answerIdList } = useAnswerVisibilityStatusStore();

  const handleSubmitClick = async () => {
    setIsLoading(true);
    try {
      await patchInterviewVisibility(interviewId, answerIdList);
      notify('success', '답변 공개 여부가 저장되었습니다.');
    } catch (error) {
      notify('error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="w-full"
      disabled={isLoading}
      onClick={handleSubmitClick}
    >
      저장하기
    </Button>
  );
};

export default SaveResultButton;
