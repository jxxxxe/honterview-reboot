import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { MyPageResultDataType } from '../type';

const ResultItem = ({
  interviewId: id,
  firstQuestionContent: title,
  categoryNames: categoryList,
  createdAt: createdDate,
  answerType,
}: MyPageResultDataType) => {
  return (
    <Link
      href={`/interview/result/${id}`}
      className="flex flex-col p-[1rem]"
    >
      {createdDate && (
        <div className="mb-[1rem] flex items-center gap-[0.4rem] text-[1.8rem] laptop:text-[1.8rem]">
          <div className="flex items-center gap-[0.3rem]">
            <span className="font-semibold">
              {createdDate.slice(0, 4)}년 {createdDate.slice(5, 7)}월{' '}
              {createdDate.slice(8, 10)}일 {createdDate.slice(11, 16)}
            </span>
            의 기록
          </div>
          {answerType === 'RECORD' ? (
            <div className="mb-[0.1rem] ml-[0.3rem] inline-flex items-center justify-center rounded-lg border border-primaries-primary px-[0.5rem] text-[1rem] font-semibold text-primaries-primary tablet:text-[1.2rem]">
              화상
            </div>
          ) : (
            <div className="mb-[0.1rem] ml-[0.3rem] inline-flex items-center justify-center rounded-lg border border-green-600 px-[0.5rem] text-[1rem] font-semibold text-green-600 tablet:text-[1.2rem]">
              채팅
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col gap-[0.8rem] rounded-lg bg-slate-50 p-[1rem]">
        <div className="flex gap-[1rem]">
          {categoryList?.map((category) => (
            <div
              key={uuidv4()}
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-background-20 px-[1rem] py-[0.5rem] text-[1rem] text-black tablet:text-[1.2rem]"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="pl-[0.5rem] text-[1.5rem]">
          <span className="whitespace-pre text-text-60">Q. </span>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default ResultItem;
