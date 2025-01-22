import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';

// OpenAI 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.perplexity.ai',
});

export async function POST(req: NextRequest) {
  try {
    const { questions, myResponses } = await req.json(); // 클라 요청을 JSON 객체로 파싱 후 메세지 얻기
    const command = `저는 개발자 면접중이고, 당신은 제 면접관입니다.`;

    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: command },
      { role: 'user', content: '면접 시작하겠습니다.' },
    ];

    questions.forEach((question, idx) => {
      messages.push(
        { role: 'assistant', content: question },
        {
          role: 'user',
          content: `${myResponses[idx]} 제 답에 대해 꼬리 질문을 한줄로 간략하게 해주세요.`,
        },
      );
    });

    console.log(messages);
    const response = await openai.chat.completions.create({
      model: 'sonar',
      messages,
      max_tokens: 100,
    });

    return NextResponse.json({
      reply: response.choices[0]?.message?.content || '응답이 없습니다.',
    });
  } catch (error) {
    console.log('Error: ', error);

    return NextResponse.json(
      { error: 'Failed to fetch GPT response' },
      { status: 500 },
    );
  }
}
