'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

const AnswerInputBox = () => {
  const textRef = useRef(null);
  const { firstQuestionTagList } = usePresettingDataStore();
  const { currentQuestion, addQuestion, addAnswer } =
    useInterviewQuestionAnswerStore();

  const sendResponse = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const msg = formData.get('chat-input') as string;
      textRef.current.value = '';

      addAnswer(msg);

      const res = await apiFetch('api/interview/openai/question', {
        method: 'POST',
        body: JSON.stringify({
          firstQuestionTagList: firstQuestionTagList,
          prevQuestion: currentQuestion,
          prevResponse: msg,
        }),
      });

      addQuestion(res?.reply);
    } catch (e) {
      console.log('Error: ', e);
      return <div>Error fetching response : {e.message}</div>;
    }
  };

  return (
    <div className="w-full px-[3rem]">
      <form
        onSubmit={sendResponse}
        className="flex w-full flex-col rounded-xl border"
      >
        <textarea
          ref={textRef}
          placeholder="답변을 입력해주세요"
          name="chat-input"
          className="flex h-[10rem] max-h-[20rem] w-full resize-none overflow-scroll rounded-lg p-4 text-[1.6rem] placeholder-text-40 outline-none"
        />
        <div className="flex w-full justify-end p-3 pt-0">
          <button className="flex size-16 items-center justify-center rounded-full bg-primaries-primary">
            <PaperAirplaneIcon className="size-full p-3 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnswerInputBox;
