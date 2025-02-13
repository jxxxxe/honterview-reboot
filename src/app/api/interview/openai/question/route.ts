import openai from '@/shared/libs/openai';
import { NextRequest, NextResponse } from 'next/server';
import { ChatCompletionMessageParam } from 'openai/resources';

export async function POST(req: NextRequest) {
  try {
    const { prevQuestion, prevResponse, questionCategoryList } =
      await req.json(); // 클라 요청을 JSON 객체로 파싱 후 메세지 얻기

    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'user',
        content: `저는 개발자 면접중이고, 당신은 제 면접관입니다. ${questionCategoryList.join(',')}와 관련해 질문해주세요.`,
      },
      { role: 'assistant', content: prevQuestion },
      {
        role: 'user',
        content: `${prevResponse}  꼬리 질문을 한줄로 간략하게 만들어 주세요.`,
      },
    ];

    const response = await openai.chat.completions.create({
      model: 'sonar',
      messages,
      max_tokens: 150,
    });

    return NextResponse.json({
      reply:
        response.choices[0]?.message?.content?.replaceAll('*', '') ||
        '응답이 없습니다.',
    });
  } catch (error) {
    console.error('Error: ', error);

    return NextResponse.json(
      { error: 'Failed to fetch GPT response' },
      { status: 500 },
    );
  }
}
