import prisma from '@/shared/libs/prisma';

export const setPublicAnswer = async (answerId: number) => {
  const answer = await prisma.answer.update({
    where: {
      id: answerId,
    },
    data: {
      visible: true,
    },
  });

  return answer;
};

export const setPrivateAnswer = async (answerId: number) => {
  const answer = await prisma.answer.update({
    where: {
      id: answerId,
    },
    data: {
      visible: false,
    },
  });

  return answer;
};
