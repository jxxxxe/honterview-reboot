import { notify } from '@/shared/components/toast';
import openai from '@/shared/libs/openai';
import { NextRequest } from 'next/server';
import { ChatCompletionMessageParam } from 'openai/resources';

export async function POST(req: NextRequest) {
  const { currentQuestion, prevAnswer } = await req.json();

  try {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'user',
        content: `저는 개발자 면접중이고, 당신은 제 면접관입니다. 제 이전 답변(${prevAnswer})과 관련해 꼬리질문을 해주세요.`,
      },
      {
        role: 'assistant',
        content: currentQuestion,
      },
      {
        role: 'user',
        content: '다른 꼬리 질문을 한줄로 간략하게 다시 해주세요',
      },
    ];

    const response = await openai.chat.completions.create({
      model: 'sonar',
      messages,
      max_tokens: 150,
    });
    return Response.json({
      reply: response?.choices[0]?.message?.content?.replaceAll('*', ''),
    });
  } catch (e) {
    notify('error', `Error: ${e.message}`);
    return Response.json({
      error: e.message,
    });
  }
}
