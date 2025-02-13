export interface IQuestion {
  id: number;
  content: string;
  likeCount: number;
  categoryNames: string[];
  isLiked?: boolean;
}

export interface IPagination {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  startIndex: number;
  endIndex: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  data: IQuestion[];
}

export interface IGetQuestions {
  content: string;
  id: number;
  categories: {
    name: string;
  }[];
  _count: {
    likes: number;
  };
}

export type QuestionOrderType = 'like' | 'latest';
