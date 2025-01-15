import prisma from '@/shared/libs/prisma';

export const likeQuestion = async (questionId: number, userId: number) => {
  const question = await prisma.questionLike.create({
    data: {
      userId,
      questionId,
    },
  });

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

  return question;
};
