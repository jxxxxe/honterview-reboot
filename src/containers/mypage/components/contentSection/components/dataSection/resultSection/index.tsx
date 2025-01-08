import { v4 as uuidv4 } from 'uuid';

import ResultItem from './components/ResultItem';
import { MyPageResultDataSectionProps, MyPageResultDataType } from './type';
import { dummyInterview } from '../dummyData';

const ResultSection = ({ isVisible }: MyPageResultDataSectionProps) => {
  return (
    <div
      className={`flex w-screen flex-1 flex-col items-center gap-[2rem] p-[1rem] pb-[3rem] tablet:w-[50rem] ${!isVisible && 'hidden'}`}
    >
      {dummyInterview.data.data?.map((content) => (
        <div
          className="flex w-full flex-col gap-[1rem] rounded-xl border border-dashed border-gray-300 transition-transform hover:scale-105"
          key={uuidv4()}
        >
          <ResultItem
            interviewId={content.interviewId}
            firstQuestionContent={content.firstQuestionContent}
            categoryNames={content.categoryNames}
            createdAt={content.createdAt}
            answerType={content.answerType}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultSection;
