import type { Metadata } from 'next';
import { dummyQuestionsList } from '../dummydata';

export const generateMetadata = async ({
  params,
}: {
  params: { questionId: string };
}): Promise<Metadata> => {
  const { questionId } = params;

  const { content } = dummyQuestionsList.data.data[Number(questionId)];
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
  return <div className="wrap m-auto my-9 max-w-[70rem] px-5">{children}</div>;
};

export default QuestionDetailLayout;
