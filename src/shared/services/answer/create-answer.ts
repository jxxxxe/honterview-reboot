import prisma from '@/shared/libs/prisma';

const createAnswer = async (
  content: string,
  questionId: number,
  userId: number,
) => {
  const answer = await prisma.answer.create({
    data: {
      content,
      questionId,
      userId,
    },
  });

  return answer;
};

export default createAnswer;
