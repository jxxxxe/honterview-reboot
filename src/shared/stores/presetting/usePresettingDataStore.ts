import { create } from 'zustand';

import { AutocompleteDataType } from '@/shared/components/autocomplete-search/type';
import { IInterviewType } from '@/shared/types/interview';

const initialState = {
  firstQuestionTagList: [],
  firstQuestion: undefined,
  questionCount: 1,
  interviewType: undefined,
  answerTime: { minute: 0, second: 0 },
};

const usePresettingDataStore = create<PresettingDataState>((set) => ({
  ...initialState,
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
    set(initialState);
  },
}));

interface PresettingDataState {
  firstQuestionTagList: AutocompleteDataType[];
  firstQuestion?: AutocompleteDataType;
  questionCount: number;
  interviewType?: IInterviewType;
  answerTime: { minute: number; second: number };
  addFirstQuestionTag: (tag: AutocompleteDataType) => void;
  removeFirstQuestionTag: (tag: AutocompleteDataType) => void;
  setFirstQuestion: (question: AutocompleteDataType | undefined) => void;
  setQuestionCount: (count: number) => void;
  setInterviewTypeCamera: () => void;
  setInterviewTypeChatting: () => void;
  setTimeMinute: (minute: number) => void;
  setTimeSecond: (second: number) => void;
  resetAllPresettingDatas: () => void;
}

export default usePresettingDataStore;
