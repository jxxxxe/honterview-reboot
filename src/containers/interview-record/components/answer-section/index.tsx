'use client';

import { useEffect } from 'react';
import useSpeechToText from './useSpeechToText';

const AnswerSection = () => {
  const { isListening, answerText } = useSpeechToText();

  return (
    <div className="absolute bottom-0 mx-5 flex w-full max-w-screen-md justify-center self-center overflow-y-scroll bg-black bg-opacity-30 p-5 text-[2rem] font-medium text-white md:h-1/6">
      {isListening ? answerText : 'Loading...'}
    </div>
  );
};

export default AnswerSection;
