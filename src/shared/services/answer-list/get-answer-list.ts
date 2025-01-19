'use server';

import { ANSWER_COUNT_IN_PAGE } from '@/containers/question-detail/constants';
import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import prisma from '@/shared/libs/prisma';
import { unstable_cache } from 'next/cache';

export const getCachedAnswerList = async (questionId: number, page = 1) => {
  const getAnswerList = unstable_cache(
    async (questionId: number, page = 1) => {
      const answerList = await prisma.answer.findMany({
        where: {
          questionId,
        },
        select: {
          id: true,
          content: true,
          user: {
            select: {
              nickname: true,
            },
          },
          likes: {
            select: {
              userId: true,
            },
          },
          _count: {
            select: {
              likes: true,
            },
          },
        },
        take: ANSWER_COUNT_IN_PAGE,
        skip: ANSWER_COUNT_IN_PAGE * (page - 1),
      });

      const newAnswerList = answerList?.map(
        ({ id, _count, content, user, likes }) => ({
          id,
          content,
          nickname: user.nickname,
          likeCount: _count.likes,
          isLiked: !!likes.find((like) => like.userId === TEMPORARY_USER_ID),
        }),
      );

      return newAnswerList;
    },
    [`answer-list-${questionId}`],
    {
      tags: [`answer-list-${questionId}`],
    },
  );

  return getAnswerList(questionId, page);
};

export const getAnswerCount = async (questionId: number) => {
  const count = await prisma.answer.count({
    where: {
      questionId,
    },
  });

  return count;
};
