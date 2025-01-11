import { AutocompleteDataType } from '@/shared/components/autocomplete-search/type';

export interface StepState {
  totalStep: number;
  currentStep: number;
  isNextButtonOn: boolean;
  increaseStep: () => void;
  decreaseStep: () => void;
  setSettingStep: () => void;
  setCameraStep: () => void;
  setChattingStep: () => void;
  setNextButtonOn: () => void;
  setNextButtonOff: () => void;
  resetAllStepDatas: () => void;
}

export interface PresettingDataState {
  firstQuestionTagList: AutocompleteDataType[];
  firstQuestion?: AutocompleteDataType;
  questionCount: number;
  interviewType?: 'RECORD' | 'TEXT';
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
