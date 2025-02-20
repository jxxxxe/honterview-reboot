export interface IAnswer {
  id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  userId: number;
  questionId: number;
  visible: boolean | null;
}
