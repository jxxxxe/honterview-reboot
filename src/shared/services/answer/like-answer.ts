import prisma from '@/shared/libs/prisma';

export const likeAnswer = async (answerId: number, userId: number) => {
  await prisma.answerLike.create({
    data: {
      answerId,
      userId,
    },
  });
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
};
