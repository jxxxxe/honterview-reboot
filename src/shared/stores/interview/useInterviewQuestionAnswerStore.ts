import { create } from 'zustand';

const useInterviewQuestionAnswerStore =
  create<useInterviewQuestionAnswerStoreType>((set) => ({
    currentQuestion: '',
    questionList: [],
    answerList: [],
    answerTimeList: [],
    createdQuestionCount: 1,
    addQuestion: (question) => {
      set(({ questionList, createdQuestionCount }) => {
        questionList.push(question);
        return {
          currentQuestion: question,
          questionList,
          createdQuestionCount: createdQuestionCount + 1,
        };
      });
    },
    addAnswer: (answer) => {
      set(({ answerList }) => {
        answerList.push(answer);
        return { answerList };
      });
    },
    addAnswerTime: (time) => {
      set(({ answerTimeList }) => {
        answerTimeList.push(time);

        return { answerTimeList };
      });
    },
    resetInterviewData: () => {
      set(() => ({
        questionList: [],
        answerList: [],
        answerTime: [],
        questionCount: 0,
      }));
    },
  }));

export default useInterviewQuestionAnswerStore;

interface useInterviewQuestionAnswerStoreType {
  currentQuestion: string;
  questionList: string[];
  answerList: string[];
  answerTimeList: number[];
  createdQuestionCount: number;
  addQuestion: (question: string) => void;
  addAnswer: (answer: string) => void;
  addAnswerTime: (time: number) => void;
  resetInterviewData: () => void;
}
