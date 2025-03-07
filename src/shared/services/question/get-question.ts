'use server';

import prisma from '@/shared/libs/prisma';

export const getQuestionById = async (questionId: number) => {
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
      likes: {
        select: {
          userId: true,
        },
      },
      categories: {
        select: {
          name: true,
        },
      },
      interviews: {
        select: {
          questions: true,
        },
      },
      answers: {
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
          likes: {
            select: {
              userId: true,
            },
          },
        },
      },
    },
  });
  return question;
};
