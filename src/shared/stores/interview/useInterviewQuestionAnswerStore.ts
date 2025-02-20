import { create } from 'zustand';

const useInterviewQuestionAnswerStore =
  create<useInterviewQuestionAnswerStoreType>((set) => ({
    currentQuestion: '',
    currentAnswer: '',
    questionList: [],
    answerList: [],
    answerTimeList: [],
    createdQuestionCount: 0,
    videoChuncks: [],
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
    changeQuestion: (question) => {
      set(({ questionList }) => {
        questionList[questionList.length ? 0 : questionList.length - 1] =
          question;
        return {
          questionList,
          currentQuestion: question,
        };
      });
    },
    appendToCurrentAnswer: (text) => {
      set(({ currentAnswer }) => ({
        currentAnswer: currentAnswer.concat(text),
      }));
    },
    resetCurrentAnswer: () => {
      set(() => ({
        currentAnswer: '',
      }));
    },
    addAnswer: (answer) => {
      set(({ answerList, currentAnswer }) => {
        if (answer) {
          answerList.push(answer);
        } else {
          answerList.push(currentAnswer);
        }
        currentAnswer = '';
        return { answerList, currentAnswer };
      });
    },
    addAnswerTime: (time) => {
      set(({ answerTimeList }) => {
        answerTimeList.push(time);

        return { answerTimeList };
      });
    },
    setVideoChuncks: (chunk: Blob) => {
      set(({ videoChuncks }) => {
        videoChuncks.push(chunk);

        return {
          videoChuncks,
        };
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
  currentAnswer: string;
  questionList: string[];
  answerList: string[];
  answerTimeList: number[];
  createdQuestionCount: number;
  videoChuncks: Blob[];
  addQuestion: (question: string) => void;
  changeQuestion: (question: string) => void;
  appendToCurrentAnswer: (text: string) => void;
  resetCurrentAnswer: () => void;
  addAnswer: (answer?: string) => void;
  addAnswerTime: (time: number) => void;
  setVideoChuncks: (chunk: Blob) => void;
  resetInterviewData: () => void;
}
