import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import prisma from '@/shared/libs/prisma';
import { NextRequest } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    return new Response(null, {
      status: 400,
    });
  }

  const isLikedData = await prisma.questionLike.findUnique({
    where: {
      userId_questionId: {
        questionId: idNumber,
        userId: TEMPORARY_USER_ID,
      },
    },
  });

  const questionLikeCount = await prisma.questionLike.count({
    where: {
      questionId: idNumber,
    },
  });

  return Response.json({
    isLiked: Boolean(isLikedData),
    likeCount: questionLikeCount,
  });
}
