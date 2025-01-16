'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AnswerItem from './answer-item';
import getAnswerList from '@/shared/services/answer-list/get-answer-list';
import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export interface IProps {
  questionId: number;
}

const AnswerList = ({ questionId }: IProps) => {
  const [answerData, setAnswerData] = useState([]);
  const [page, setPage] = useState(0);
  const firstAnswerList = answerData?.map(({ id, _count, content, user }) => ({
    id,
    content,
    nickname: user.nickname,
    likeCount: _count.likes,
  }));

  useEffect(() => {
    const fetchAnswerData = async () => {
      const data = await getAnswerList(questionId, page);
      setAnswerData(data);
    };
    fetchAnswerData();
  }, [page]);

  return (
    <>
      {answerData.length ? (
        <div className="flex flex-col gap-8">
          {firstAnswerList.map(({ nickname, content, id, likeCount }) => (
            <AnswerItem
              key={uuidv4()}
              answerId={id}
              nickname={nickname}
              content={content}
              likeCount={likeCount}
              isLiked={false}
            />
          ))}
          <button
            onClick={() => setPage(page + 1)}
            className="text-left"
          >
            <ArrowDownIcon />
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-5 opacity-10">
          <Image
            quality={100}
            src="/logo-removebg.png"
            alt="혼터뷰 로고"
            width={150}
            height={150}
          />
          <h2 className="text-large">유저들의 답변이 아직 없어요!</h2>
        </div>
      )}
    </>
  );
};

export default AnswerList;
