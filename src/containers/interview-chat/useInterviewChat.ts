import { create } from 'zustand';

import { AutocompleteDataType } from '@/shared/components/autocomplete-search/type';

const initialState = {
  firstQuestionTagList: [],
  firstQuestion: undefined,
  questionCount: 1,
};

const useInterviewChat = create<useInterviewChatState>((set) => ({
  ...initialState,
  setInterviewChat: (tagList, firstQuestion, questionCount) => ({
    firstQuestionTagList: tagList,
    firstQuestion: firstQuestion,
    questionCount: questionCount,
  }),
  resetAllInterviewDatas: () => {
    set(initialState);
  },
}));

interface useInterviewChatState {
  firstQuestionTagList: AutocompleteDataType[];
  firstQuestion?: AutocompleteDataType;
  questionCount: number;
  setInterviewChat: (
    tagList: AutocompleteDataType[],
    firstQuestion: AutocompleteDataType | undefined,
    questionCount: number,
  ) => void;
  resetAllInterviewDatas: () => void;
}

export default useInterviewChat;
