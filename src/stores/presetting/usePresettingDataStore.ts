import { create } from 'zustand';

import { PresettingDataState } from './type';

const usePresettingDataStore = create<PresettingDataState>((set) => ({
  firstQuestionTags: [],
  firstQuestion: undefined,
  questionCount: 0,
  interviewType: undefined,
  answerTime: { minute: 0, second: 0 },
  addFirstQuestionTag: (tag) => {
    set(({ firstQuestionTags }) => {
      firstQuestionTags.push(tag);
      return {
        firstQuestionTags,
      };
    });
  },
  removeFirstQuestionTag: (tag) => {
    set(({ firstQuestionTags }) => {
      firstQuestionTags.splice(firstQuestionTags.indexOf(tag), 1);
      return {
        firstQuestionTags,
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
      interviewType: 'TEXT',
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
      firstQuestionTags: [],
      firstQuestion: undefined,
      questionCount: 0,
      interviewType: undefined,
      answerTime: { minute: 0, second: 0 },
    }));
  },
}));

export default usePresettingDataStore;
