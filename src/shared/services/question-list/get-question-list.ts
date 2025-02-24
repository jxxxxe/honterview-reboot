'use server';

import { unstable_cache } from 'next/cache';
import { QUESTION_COUNT_IN_PAGE } from '@/containers/question-list/constants';
import prisma from '@/shared/libs/prisma';
import { IPresettingCategory } from '@/shared/types/category-list';

export const getCachedQuestionList = unstable_cache(
  async (
    searchWord = '',
    categoryList?: IPresettingCategory[],
    order = 'recent',
    page = 1,
  ) => {
    const questionList = await prisma.question.findMany({
      where: {
        ...(searchWord && {
          content: {
            contains: searchWord,
            mode: 'insensitive',
          },
        }),
        ...(categoryList?.length && {
          categories: {
            some: {
              name: {
                in: categoryList.map((c) => c.name),
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
            id: true,
            name: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      ...(order === 'like' && {
        orderBy: {
          likes: {
            _count: 'desc',
          },
        },
      }),
      take: QUESTION_COUNT_IN_PAGE,
      skip: (page - 1) * QUESTION_COUNT_IN_PAGE,
    });

    return questionList;
  },
  ['get-question-list'],
  { tags: ['get-question-list'] },
);

export const getQuestionCount = async (
  searchWord = '',
  categoryList?: string[],
) => {
  const count = await prisma.question.count({
    where: {
      content: {
        contains: searchWord,
        mode: 'insensitive',
      },
      ...(categoryList?.length && {
        categories: {
          some: {
            name: {
              in: categoryList,
            },
          },
        },
      }),
    },
  });

  return count;
};
