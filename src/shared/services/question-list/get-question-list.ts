'use server';

import { unstable_cache } from 'next/cache';
import { QUESTION_COUNT_IN_PAGE } from '@/containers/question-list/constants';
import prisma from '@/shared/libs/prisma';
import { ICategory } from '@/shared/types/category-list';

export const getCachedQuestionList = unstable_cache(
  async (
    searchWord = '',
    categoryList?: ICategory[],
    likeOrder = false,
    page = 0,
  ) => {
    const categoryIdList = categoryList?.map((category) => category.id);
    const questionList = await prisma.question.findMany({
      where: {
        content: {
          contains: searchWord,
          mode: 'insensitive',
        },
        ...(categoryIdList?.length && {
          categories: {
            some: {
              id: {
                in: categoryIdList,
              },
            },
          },
        }),
      },
      select: {
        id: true,
        content: true,
        categories: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            likes: true,
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
  },
  ['get-question-list'],
  { tags: ['get-question-list'] },
);

export const getQuestionCount = async (
  searchWord = '',
  categoryList?: ICategory[],
) => {
  const categoryIdList = categoryList?.map((category) => category.id);
  const count = await prisma.question.count({
    where: {
      content: {
        contains: searchWord,
        mode: 'insensitive',
      },
      ...(categoryIdList.length && {
        categories: {
          some: {
            id: {
              in: categoryIdList,
            },
          },
        },
      }),
    },
  });

  return count;
};
