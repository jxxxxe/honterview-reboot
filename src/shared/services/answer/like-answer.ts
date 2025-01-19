'use server';

import prisma from '@/shared/libs/prisma';
import { revalidateTag } from 'next/cache';

export const likeAnswer = async (answerId: number, userId: number) => {
  await prisma.answerLike.create({
    data: {
      answerId,
      userId,
    },
  });

  revalidateTag(`answer-list-${answerId}`);
  return true;
};

export const unLikeAnswer = async (answerId: number, userId: number) => {
  await prisma.answerLike.delete({
    where: {
      userId_answerId: {
        userId,
        answerId,
      },
    },
  });

  revalidateTag(`answer-list-${answerId}`);

  return false;
};
