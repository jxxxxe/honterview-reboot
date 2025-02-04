import { create } from 'zustand';

import { PresettingDataState } from './type';

const usePresettingDataStore = create<PresettingDataState>((set) => ({
  firstQuestionTagList: [],
  firstQuestion: undefined,
  questionCount: 1,
  interviewType: undefined,
  answerTime: { minute: 0, second: 0 },
  addFirstQuestionTag: (tag) => {
    set(({ firstQuestionTagList }) => {
      firstQuestionTagList.push(tag);
      return {
        firstQuestionTagList,
      };
    });
  },
  removeFirstQuestionTag: (tag) => {
    set(({ firstQuestionTagList }) => {
      firstQuestionTagList.splice(firstQuestionTagList.indexOf(tag), 1);
      return {
        firstQuestionTagList,
      };
    });
  },
  setFirstQuestion: (question) => {
    set(() => ({
      firstQuestion: question,
    }));
  },
  setQuestionCount: (count) => {
    set(() => ({
      questionCount: count,
    }));
  },
  setInterviewTypeCamera: () => {
    set(() => ({
      interviewType: 'RECORD',
    }));
  },
  setInterviewTypeChatting: () => {
    set(() => ({
      interviewType: 'CHAT',
    }));
  },
  setTimeMinute: (minute) => {
    set(({ answerTime }) => ({
      answerTime: { ...answerTime, minute },
    }));
  },
  setTimeSecond: (second) => {
    set(({ answerTime }) => ({
      answerTime: { ...answerTime, second },
    }));
  },
  resetAllPresettingDatas: () => {
    set(() => ({
      firstQuestionTagList: [],
      firstQuestion: undefined,
      questionCount: 0,
      interviewType: undefined,
      answerTime: { minute: 0, second: 0 },
    }));
  },
}));

export default usePresettingDataStore;
