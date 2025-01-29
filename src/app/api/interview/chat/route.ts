import { notify } from '@/shared/components/toast';
import prisma from '@/shared/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId, firstQuestionId, questionList, answerList } =
    await req.json();
  try {
    const interview = await prisma.interview.create({
      data: {
        interview_type: 'CHAT',
        userId,
        firstQuestionId,
        questions: questionList,
        answers: answerList,
      },
    });

    await prisma.answer.create({
      data: {
        questionId: firstQuestionId,
        content: answerList[0],
        userId,
      },
    });

    return NextResponse.json(interview.id);
  } catch (e) {
    notify('error', e.message);
    return NextResponse.json({
      error: e.message,
    });
  }
}
