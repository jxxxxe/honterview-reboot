export interface MyPageResultDataType {
  interviewId: number;
  firstQuestionContent: string;
  categoryNames: string[];
  createdAt: string;
  status?: string;
  answerType: string;
}

export interface MyPageResultDataSectionProps {
  isVisible: boolean;
}
