export interface IMypageInterview {
  id: number;
  created_at: Date;
  interview_type: string;
  firstQuestion: {
    content: string;
    categories: {
      name: string;
    }[];
  };
}

export interface IMypageLikedQuestion {
  question: {
    id: number;
    content: string;
    categories: {
      name: string;
    }[];
  };
}
