import prisma from '@/shared/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId, firstQuestionId, questionList, answerList } =
    await req.json();
  try {
    const answer = await prisma.answer.create({
      data: {
        questionId: firstQuestionId,
        content: answerList[0],
        userId,
      },
    });

    const interview = await prisma.interview.create({
      data: {
        interview_type: 'CHAT',
        userId,
        firstQuestionId,
        firstAnswerId: answer.id,
        questions: questionList,
        answers: answerList,
      },
    });

    return NextResponse.json(interview.id);
  } catch (e) {
    console.error('ERROR : ', e.message);

    return NextResponse.json({
      error: e.message,
    });
  }
}
