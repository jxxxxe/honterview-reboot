import { QUESTION_COUNT_IN_PAGE } from '@/shared/constants/count-in-page';
import prisma from '@/shared/libs/prisma';
import { ICategory } from '@/shared/types/category-list';

const getQuestionList = async (
  categoryList: ICategory[],
  likeOrder?: boolean,
  page = 0,
) => {
  const questionList = await prisma.question.findMany({
    where: {
      categories: {
        some: {
          id: {
            in: categoryList.map((category) => category.id),
          },
        },
      },
    },
    select: {
      categories: {
        select: {
          name: true,
        },
      },
    },
    ...(likeOrder && {
      orderBy: {
        likes: {
          _count: 'desc',
        },
      },
    }),
    take: QUESTION_COUNT_IN_PAGE,
    skip: page * QUESTION_COUNT_IN_PAGE,
  });

  return questionList;
};

export default getQuestionList;
