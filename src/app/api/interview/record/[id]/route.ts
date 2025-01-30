import { put } from '@vercel/blob';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

interface SaveChatInterviewProps {
  userId: number;
  questionList: string[];
  answerList: string[];
  tagList: string[];
  timerList: number[];
  videoUrl: string;
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const formData = await req.formData();
  const recordFile = formData.get('video') as Blob;
  const { id: interviewId } = await params;

  if (!recordFile) {
    return NextResponse.json(
      {
        error: '녹화된 비디오 파일이 없습니다.',
      },
      {
        status: 400,
      },
    );
  }
  try {
    //vercel Blob에 업로드
    const { url } = await put(
      `honterview/interview/record/${interviewId}`,
      recordFile,
      {
        access: 'public',
        contentType: 'video/mp4',
      },
    );

    return NextResponse.json({
      success: true,
      videoUrl: url,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: e.message,
    });
  }
}
