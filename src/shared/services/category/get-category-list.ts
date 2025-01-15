import prisma from '@/shared/libs/prisma';

const getCategoryList = async () => {
  const categoryList = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return categoryList;
};

export default getCategoryList;
