'use server';

import prisma from '@/shared/libs/prisma';
import { IPresettingCategory } from '@/shared/types/category-list';

const createQuestion = async (
  content: string,
  categoryList: IPresettingCategory[],
  userId: number,
) => {
  const question = await prisma.question.create({
    data: {
      content,
      userId,
      categories: {
        connect: categoryList.map((cate) => ({ name: cate.name })),
      },
    },
  });

  return question;
};

export default createQuestion;
