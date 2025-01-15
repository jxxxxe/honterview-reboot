import prisma from '@/shared/libs/prisma';

const createQuestion = async (userId: number, content: string) => {
  const question = await prisma.question.create({
    data: {
      content,
      userId,
    },
  });

  return question;
};

export default createQuestion;
