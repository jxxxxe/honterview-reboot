'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AnswerItem from './answer-item';
import {
  getCachedAnswerList,
  getAnswerCount,
} from '@/shared/services/answer-list/get-answer-list';
import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { ANSWER_COUNT_IN_PAGE } from '../../constants';
import LoadingIcon from '@/shared/components/loading-icon';

export interface IProps {
  questionId: number;
}

const AnswerList = ({ questionId }: IProps) => {
  const [answerList, setAnswerList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnswerData = async () => {
      setIsLoading(true);
      const answerData = await getCachedAnswerList(questionId, page);
      if (!answerData.length) {
        return;
      }

      answerList.length
        ? setAnswerList((prev) => [...prev, answerData])
        : setAnswerList(answerData);

      setIsLoading(false);
    };
    fetchAnswerData();
  }, [page]);

  useEffect(() => {
    const fetchTotalPage = async () => {
      setIsLoading(true);

      const totalAnswerCount = await getAnswerCount(questionId);
      setTotalPage(Math.ceil(totalAnswerCount / ANSWER_COUNT_IN_PAGE) - 1);
      setIsLoading(false);
    };
    fetchTotalPage();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-large">
        Loading...
      </div>
    );
  }

  return (
    <>
      {answerList.length ? (
        <div className="flex flex-col gap-5">
          {answerList.map(({ nickname, content, id, likeCount, isLiked }) => (
            <AnswerItem
              key={uuidv4()}
              answerId={id}
              nickname={nickname}
              content={content}
              likeCount={likeCount}
              isLiked={isLiked}
            />
          ))}
          {page < totalPage && (
            <button
              onClick={() => setPage(page + 1)}
              className="flex w-full justify-center text-left *:size-10"
            >
              <ArrowDownIcon />
            </button>
          )}
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
