export interface IQuestion {
  id: number;
  content: string;
  likeCount: number;
  categoryNames: string[];
  isLiked?: boolean;
  tailQuestion: string[];
  answers: {
    id: number;
    content: string;
    userNickname: string;
    likeCount: number;
    isLiked: boolean;
  }[];
}

// export interface IPagination {
//   currentPage: number;
//   pageSize: number;
//   totalElements: number;
//   startIndex: number;
//   endIndex: number;
//   hasPreviousPage: boolean;
//   hasNextPage: boolean;
//   data: IQuestion[];
// }

export interface IGetQuestions {
  id: number;
  content: string;
  categories: {
    name: string;
  }[];
  _count: {
    likes: number;
  };
  interviews: {
    questions: string[];
  }[];
  likes: {
    userId: number;
  }[];
  answers: {
    id: number;
    content: string;
    user: {
      nickname: string;
    };
    _count: {
      likes: number;
    };
    likes: {
      userId: number;
    }[];
  }[];
}

export type QuestionOrderType = 'like' | 'latest';
