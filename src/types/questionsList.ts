export interface IQuestion {
  id: string;
  content: string;
  heartsCount: number;
  categoryNames: string[];
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
