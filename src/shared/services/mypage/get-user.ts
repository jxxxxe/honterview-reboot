'use server';

import prisma from '@/shared/libs/prisma';

const getMypageById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      nickname: true,
      interviews: {
        select: {
          id: true,
          firstQuestion: {
            select: {
              content: true,
              categories: {
                select: {
                  name: true,
                },
              },
            },
          },
          created_at: true,
          interview_type: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      },
      question_likes: {
        select: {
          question: {
            select: {
              id: true,
              content: true,
              categories: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  });

  return user;
};

export default getMypageById;
