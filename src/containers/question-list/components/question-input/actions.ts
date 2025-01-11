'use server';

import { dummyQuestionsList } from '@/app/questions/dummydata';

export const getSearchResultList = async (searchWord: string) => {
  return dummyQuestionsList.data.data.filter((q) =>
    q.content.toLowerCase().includes(searchWord.toLowerCase()),
  );
};
