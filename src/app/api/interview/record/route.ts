import { notify } from '@/shared/components/toast';
import prisma from '@/shared/libs/prisma';
import { apiFetch } from '@/shared/utils/apiFetch';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId, firstQuestionId, questionList, answerList, timerList } =
    await req.json();

  try {
    const interview = await prisma.interview.create({
      data: {
        interview_type: 'RECORD',
        userId,
        firstQuestionId,
        questions: questionList,
        answers: answerList,
        timers: timerList,
      },
    });

    await prisma.answer.create({
      data: {
        questionId: firstQuestionId,
        content: answerList[0],
        userId,
      },
    });

    const data = await apiFetch(`api/interview/record/${interview.id}`, {
      method: 'POST',
    });

    const videoInterview = await prisma.interview.update({
      where: {
        id: interview.id,
      },
      data: {
        videoUrl: data.videoUrl,
      },
    });

    return NextResponse.json(videoInterview.id);
  } catch (e) {
    notify('error', e.message);
    return NextResponse.json({
      error: e.message,
    });
  }
}
