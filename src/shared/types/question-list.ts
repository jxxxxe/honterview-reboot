export interface IQuestion {
  id: number;
  content: string;
  heartsCount: number;
  categoryNames: string[];
  isHearted?: boolean;
  isBookmarked?: boolean;
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

export interface IQuestionsList {
  message: string;
  data: IPagination;
}
