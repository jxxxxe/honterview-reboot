import prisma from '@/shared/libs/prisma';

const updateAnswer = async (answerId: number, content: string) => {
  const answer = prisma.answer.update({
    where: {
      id: answerId,
    },
    data: {
      content,
    },
  });

  return answer;
};

export default updateAnswer;
