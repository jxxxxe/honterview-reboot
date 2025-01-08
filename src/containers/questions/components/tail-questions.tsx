import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { dummyQuestionsList } from '@/app/questions/dummydata';

export interface IProps {
  questionId: number;
}

const TailQuestions = async ({ questionId }: IProps) => {
  const { data } = dummyQuestionsList.data;

  if (data.length === 0) return <></>;
  return (
    <>
      <hr className="my-20" />
      <div>
        <h3 className="mb-10 mt-5 text-[2.4rem] font-bold text-[#3C4654]">
          이 질문의 꼬리 질문
        </h3>
        <ul className="flex flex-col gap-3 text-[1.8rem] font-light text-[#4e5968]">
          {data.map(({ content, id }) => (
            <li
              key={uuidv4()}
              className="w-fit cursor-pointer hover:text-black"
            >
              <span className="mr-4 font-bold text-gray-950 opacity-30">Q</span>
              <Link href={`/questions/${id}`}>{content}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TailQuestions;
