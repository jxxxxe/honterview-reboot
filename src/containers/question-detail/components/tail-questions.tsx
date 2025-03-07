import { getQuestionById } from '@/shared/services/question/get-question';
import { v4 as uuidv4 } from 'uuid';

export interface IProps {
  questionId: number;
}

const TailQuestions = async ({ questionId }: IProps) => {
  const question = await getQuestionById(questionId);

  if (!question.interviews) {
    return;
  }

  const tailQuestionList = question.interviews
    .map((interview) => interview.questions.slice(1))
    .flat();

  const selectedIndexList = [];
  const selectedTailList = [];
  for (let i = 0; i < 3; i += 1) {
    const randomIndex = Math.floor(Math.random() * tailQuestionList.length);

    if (selectedIndexList.indexOf(randomIndex) === -1) {
      selectedIndexList.push(randomIndex);
      selectedTailList.push(tailQuestionList[randomIndex]);
    } else {
      i -= 1;
    }
  }

  return (
    <>
      <hr className="my-20" />
      <div>
        <h3 className="mb-10 mt-5 text-[2.4rem] font-bold text-[#3C4654]">
          이 질문의 꼬리 질문
        </h3>
        <ul className="flex flex-col gap-3 text-[1.8rem] font-light text-[#4e5968]">
          {selectedTailList.map((tailQuestion) => (
            <li
              key={uuidv4()}
              className="w-fit"
            >
              <span className="mr-4 font-bold text-gray-950 opacity-30">Q</span>
              {tailQuestion}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TailQuestions;
