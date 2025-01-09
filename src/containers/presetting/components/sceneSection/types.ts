export interface InterviewTypeSectionProps {
  setNextItemOn: (value: boolean) => void;
  isVisible: boolean;
}

export interface QuestionCountSectionProps {
  setNextItemOn: () => void;
}

export interface TimerSectionProps {
  isVisible: boolean;
}

export interface PreSettingButtonSectionProps {
  fromQuestionPage?: boolean;
}
