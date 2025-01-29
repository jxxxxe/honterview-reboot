import prisma from '@/shared/libs/prisma';

const getInterview = async (id: number) => {
  const interview = await prisma.interview.findUnique({
    where: {
      id,
    },
  });

  return interview;
};

export default getInterview;
