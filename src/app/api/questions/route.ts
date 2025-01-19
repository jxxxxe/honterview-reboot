import { QUESTION_COUNT_IN_PAGE } from '@/containers/question-list/constants';
import prisma from '@/shared/libs/prisma';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const categoryList = params.getAll('categories');
  const searchWord = params.get('query');
  const order = params.get('order');
  const page = params.get('page');

  const pageNumber = Number(page) ? Number(page) : 1;

  try {
    const questionList = await prisma.question.findMany({
      where: {
        ...(searchWord && {
          content: {
            contains: searchWord,
            mode: 'insensitive',
          },
        }),
        ...(categoryList[0] && {
          categories: {
            some: {
              name: {
                in: categoryList,
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
      skip: (pageNumber - 1) * QUESTION_COUNT_IN_PAGE,
    });

    return Response.json(questionList ?? {});
  } catch (e) {
    console.log(e);
  }
}
