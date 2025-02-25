import { v4 as uuidv4 } from 'uuid';

import ResultItem from './result-item';
import { IMypageInterview } from '@/shared/types/mypage';

export interface MyPageResultDataSectionProps {
  interviewList: IMypageInterview[];
  isVisible: boolean;
}

const ResultSection = ({
  interviewList,
  isVisible,
}: MyPageResultDataSectionProps) => {
  return (
    <div
      className={`flex w-screen flex-1 flex-col items-center gap-[2rem] p-[1rem] pb-[3rem] tablet:w-[50rem] ${!isVisible && 'hidden'}`}
    >
      {interviewList?.map(
        ({ id, firstQuestion, created_at, interview_type }) => (
          <div
            className="flex w-full flex-col gap-[1rem] rounded-xl border border-dashed border-gray-300 transition-transform hover:scale-105"
            key={uuidv4()}
          >
            <ResultItem
              interviewId={id}
              firstQuestionContent={firstQuestion.content}
              categoryNames={firstQuestion.categories.map(({ name }) => name)}
              createdAt={created_at.toLocaleString().split('.')}
              answerType={interview_type}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default ResultSection;
