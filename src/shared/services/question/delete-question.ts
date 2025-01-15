import prisma from '@/shared/libs/prisma';

const deleteQuestion = async (questionId: number) => {
  await prisma.question.delete({
    where: {
      id: questionId,
    },
  });
};

export default deleteQuestion;
