'use client';

import { useEffect } from 'react';

import useStepStore from '@/container/presetting/stores/useStepStore';

import { TERMS_AGREE_TEXT } from '..';

const TermsAgreeSection = () => {
  const { setNextButtonOn, setNextButtonOff } = useStepStore();

  useEffect(() => {
    setNextButtonOff();
  }, [setNextButtonOff]);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target) {
      return;
    }
    const { checked } = e.target;
    checked ? setNextButtonOn() : setNextButtonOff();
  };

  return (
    <label
      htmlFor="agree"
      className="flex w-full items-center justify-center gap-[1rem] font-semibold"
    >
      <input
        type="checkbox"
        className="h-[1.5rem] w-[1.5rem]"
        id="agree"
        onChange={handleCheckChange}
      />
      {TERMS_AGREE_TEXT}
    </label>
  );
};

export default TermsAgreeSection;
