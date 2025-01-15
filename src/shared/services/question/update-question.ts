import prisma from '@/shared/libs/prisma';

const updateQuestion = async (questionId: number, content: string) => {
  const question = await prisma.question.update({
    where: {
      id: questionId,
    },
    data: {
      content,
    },
  });

  return question;
};

export default updateQuestion;
