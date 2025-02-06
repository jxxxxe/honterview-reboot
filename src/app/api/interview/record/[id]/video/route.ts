import { notify } from '@/shared/components/toast';
import prisma from '@/shared/libs/prisma';
import { put } from '@vercel/blob';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false, // 필수 설정
    sizeLimit: '1000mb',
  },
};

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const videoFormData = await req.formData();
  const recordFile = videoFormData.get('video') as Blob;
  const { id: interviewId } = await params;

  if (!recordFile) {
    console.error('error', '녹화된 비디오 파일이 없습니다.');

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
    const { pathname, url, downloadUrl } = await put(
      `interview/record/video/${interviewId}`,
      recordFile,
      {
        access: 'public',
        contentType: 'video/mp4',
      },
    );

    await prisma.video.create({
      data: {
        pathname,
        url,
        downloadUrl,
        Interview: {
          connect: {
            id: Number(interviewId),
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      videoUrl: url,
    });
  } catch (e) {
    console.error('error', e.message);
    return NextResponse.json({
      success: false,
      error: e.message,
    });
  }
}
