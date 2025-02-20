import Image from 'next/image';
import QuestionModal from './question-modal';
import { IAnswer } from '@/shared/types/answer';
import { v4 } from 'uuid';
import AnswerVisibilityToggle from './answer-visibility-toggle';

interface IProps {
  questionList: string[];
  answerList: string[];
  firstQuestionId: number;
  firstAnswer: IAnswer;
  timers?: number[];
}

const QuestionAnswerSection = async ({
  questionList,
  answerList,
  firstQuestionId,
  firstAnswer,
  timers,
}: IProps) => {
  console.log(timers);
  return (
    <div className="flex w-full flex-col gap-10">
      {questionList.map((question, index) => (
        <div
          key={v4()}
          className="flex flex-col gap-3 rounded-lg border-[1px] border-dashed border-gray-300 p-5"
        >
          {index === 0 ? (
            <div className="flex w-full justify-between">
              <QuestionModal
                questionContent={question}
                questionId={firstQuestionId}
              />
              <div className="flex h-full items-center gap-2 text-large">
                답변공개
                <AnswerVisibilityToggle answerData={firstAnswer} />
              </div>
            </div>
          ) : (
            <div className="inline-block p-1 px-3 text-left text-large">
              {question}
            </div>
          )}
          <div className="rounded-lg bg-slate-50 px-11 py-9 text-large">
            {answerList?.at(index) ? (
              <div>
                <div>{timers && timers[index]}</div>
                {answerList[index]}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 opacity-10">
                <Image
                  src="/logo-removebg.png"
                  width={80}
                  height={80}
                  alt="혼터뷰 로고"
                  className="m-auto"
                />
                답변을 하지 않았어요
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswerSection;
