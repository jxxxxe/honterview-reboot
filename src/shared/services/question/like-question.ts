'use server';

import prisma from '@/shared/libs/prisma';
import { revalidateTag, unstable_cache } from 'next/cache';

export const likeQuestion = async (questionId: number, userId: number) => {
  const question = await prisma.questionLike.create({
    data: {
      userId,
      questionId,
    },
  });

  revalidateTag(`my-like-status-${questionId}-${userId}`);

  return question;
};

export const unLikeQuestion = async (questionId: number, userId: number) => {
  const question = await prisma.questionLike.delete({
    where: {
      userId_questionId: {
        userId,
        questionId,
      },
    },
  });

  revalidateTag(`my-like-status-${questionId}-${userId}`);

  return question;
};

export const cachedIsLikedQuestion = async (
  questionId: number,
  userId: number,
) => {
  const isLikedQuestion = unstable_cache(
    async (questionId: number, userId: number) => {
      const like = await prisma.questionLike.findUnique({
        where: {
          userId_questionId: {
            userId,
            questionId,
          },
        },
      });

      const count = await prisma.questionLike.count({
        where: {
          questionId,
        },
      });

      return { isLiked: Boolean(like), likeCount: count };
    },
    [`my-like-status-${questionId}-${userId}`],
    {
      tags: [`my-like-status-${questionId}-${userId}`],
    },
  );
  return isLikedQuestion(questionId, userId);
};
