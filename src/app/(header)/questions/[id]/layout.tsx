import type { Metadata } from 'next';
import { QuestionDetailProps } from './page';
import { getQuestionById } from '@/shared/services/question/get-question';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({
  params,
}: QuestionDetailProps): Promise<Metadata> => {
  const { id } = await params;
  const questionId = Number(id);
  if (isNaN(questionId)) {
    notFound();
  }

  const question = await getQuestionById(questionId);

  if (!question) {
    notFound();
  }

  const { content } = question;
  const title = `혼터뷰 - ${content}`;
  const description = `${content}에 대한 답변을 찾아보세요. 면접 준비에 도움이 되는 다양한 정보와 팁을 혼터뷰에서 제공합니다.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `http://honterview.site/interview/question/${questionId}`,
    },
    twitter: {
      title,
      description,
    },
  };
};

const QuestionDetailLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="fit-wrap m-5 min-w-[32rem] max-w-[100rem] md:mx-20 md:my-10 lg:mx-auto">
      {children}
    </div>
  );
};

export default QuestionDetailLayout;
