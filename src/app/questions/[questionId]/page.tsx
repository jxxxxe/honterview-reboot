import Image from 'next/image';

import AnswerList from '@/containers/questions/components/answer-list';
import { IProps } from '@/containers/questions/types';
import {
  dummyAnswerList,
  dummyCategories,
  dummyQuestionsList,
} from '../dummydata';
import TitleWithInterviewStart from '@/containers/questions/components/title-with-interview-start';
import TailQuestions from '@/containers/questions/components/tail-questions';

const Page = async ({ params }: IProps) => {
  const { questionId } = params;
  const questionIdAsNumber = Number(questionId);
  const { data: categories } = dummyCategories;

  const questionInitialData = dummyQuestionsList.data.data[0];

  const {
    content: questionTitle,
    categoryNames,
    heartsCount,
    isHearted,
    isBookmarked,
  } = questionInitialData;

  return (
    <>
      <div className="mb-20">
        <TitleWithInterviewStart
          questionTitle={questionTitle}
          categoryNames={categoryNames}
          questionId={questionIdAsNumber}
          heartsCount={heartsCount}
          categories={categories}
          isHearted={isHearted}
          isBookmarked={isBookmarked}
        >
          {questionTitle}
        </TitleWithInterviewStart>
      </div>
      {dummyAnswerList.data.data.length === 0 ? (
        <div className="flex flex-col items-center gap-5 opacity-10">
          <Image
            quality={100}
            src="/images/logo-removebg.png"
            alt="혼터뷰 로고"
            width={150}
            height={150}
          />
          <h2 className="text-large">답변이 존재하지 않습니다...</h2>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <AnswerList
            questionId={questionIdAsNumber}
            isModalLoad={false}
          />
        </div>
      )}

      <TailQuestions questionId={questionIdAsNumber} />
    </>
  );
};

export default Page;
