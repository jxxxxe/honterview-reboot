'use server';

import { ANSWER_COUNT_IN_PAGE } from '@/containers/question-detail/constants';
import prisma from '@/shared/libs/prisma';

const getAnswerList = async (questionId: number, page = 0) => {
  const answerList = await prisma.answer.findMany({
    where: {
      questionId,
    },
    select: {
      id: true,
      content: true,
      user: {
        select: {
          nickname: true,
        },
      },
      _count: {
        select: {
          likes: true,
        },
      },
    },
    take: ANSWER_COUNT_IN_PAGE,
    skip: ANSWER_COUNT_IN_PAGE * page,
  });

  return answerList;
};

export default getAnswerList;
