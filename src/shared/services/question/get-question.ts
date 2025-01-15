import prisma from '@/shared/libs/prisma';

export const getQuestion = async (questionId: number) => {
  const question = await prisma.question.findUnique({
    where: {
      id: questionId,
    },
    select: {
      id: true,
      content: true,
      _count: {
        select: {
          likes: true,
        },
      },
      categories: {
        select: {
          name: true,
        },
      },
      answers: {
        select: {
          content: true,
          _count: {
            select: {
              likes: true,
            },
          },
          user: {
            select: {
              nickname: true,
            },
          },
        },
      },
    },
  });

  return question;
};
