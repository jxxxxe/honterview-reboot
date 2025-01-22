'use client';

import Button, { ButtonType } from '@/shared/components/button';
import usePresettingDataStore from '@/shared/stores/presetting/usePresettingDataStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { UserCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { v4 } from 'uuid';

/* TODO
<textarea>
2. 엔터 이벤트 처리하기
3. 높이 자동조절
*/

const InterviewChatPage = () => {
  const { firstQuestion, firstQuestionTagList } = usePresettingDataStore();

  if (!firstQuestion) {
    return <div>첫 질문을 선택해주세요!</div>;
  }

  const [aiQuestionList, setAiQuestionList] = useState([firstQuestion.name]);
  const [myResponseList, setMyResponseList] = useState([]);
  const textRef = useRef(null);
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const msg = formData.get('chat-input');
      textRef.current = '';

      setMyResponseList((prev) => [...prev, msg]);

      const res = await apiFetch('api/chat', {
        method: 'POST',
        body: JSON.stringify({
          firstQuestionTagList: firstQuestionTagList,
          questions: aiQuestionList,
          myResponses: [...myResponseList, msg],
        }),
      });

      setAiQuestionList((prev) => [...prev, res.reply]);
    } catch (e) {
      console.log('Error: ', e);
      setAiQuestionList((prev) => [...prev, 'Error fetching response']);
    }
  };

  return (
    <div className="mx-auto flex max-h-[calc(100vh-9rem)] w-full transform flex-col items-center gap-10 overflow-hidden rounded-3xl bg-text-20 bg-opacity-20 p-[3rem] pt-0 text-[1.6rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] tablet:max-w-[80rem]">
      <div className="fixed flex w-full justify-end bg-white py-[1rem] pr-[4rem]">
        <Button
          styleType={ButtonType.Type3}
          className="p-3"
        >
          면접 종료
        </Button>
      </div>
      <div className="mt-[7rem] flex h-full w-full flex-1 flex-col gap-10 overflow-scroll *:gap-10">
        {aiQuestionList.map((aiQuestion, idx) => (
          <div
            key={v4()}
            className="flex flex-col text-large"
          >
            <div className="flex w-fit items-center justify-start gap-3">
              <div className="flex flex-col items-center text-[1.5rem]">
                <UserCircleIcon className="size-20" />
                면접관
              </div>
              <span className="mr-1 rounded-e-3xl rounded-es-3xl border px-8 py-5">
                {aiQuestion}
              </span>
            </div>
            {myResponseList[idx] && (
              <div className="mr-1 flex place-content-end self-end rounded-s-3xl rounded-ee-3xl bg-text-80 px-8 py-5 text-text-20">
                {myResponseList[idx]}
              </div>
            )}
          </div>
        ))}
      </div>
      <form
        onSubmit={sendMessage}
        className="relative flex w-full flex-col border"
      >
        <textarea
          ref={textRef}
          name="chat-input"
          className="flex h-[10rem] max-h-[20rem] w-full resize-none overflow-scroll rounded-lg p-4 text-[1.6rem] placeholder-text-40 outline-none"
        />
        <div className="w-full">
          <button className="absolute bottom-3 right-3 flex size-16 items-center justify-center rounded-full bg-primaries-primary">
            <PaperAirplaneIcon className="size-full p-3 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InterviewChatPage;
