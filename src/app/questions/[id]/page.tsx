import AnswerList from '@/containers/question-detail/components/answer-list';
import { notFound } from 'next/navigation';
import QuestionDetailHeader from '@/containers/question-detail/components/question-detail-header';

export interface QuestionDetailProps {
  params: Promise<{
    id: string;
  }>;
}

const QuestionDetailPage = async ({ params }: QuestionDetailProps) => {
  const { id } = await params;
  const questionId = Number(id);

  if (isNaN(questionId)) {
    notFound();
  }

  return (
    <>
      <QuestionDetailHeader questionId={questionId} />
      <AnswerList questionId={questionId} />
      {/* <TailQuestions questionId={questionIdAsNumber} /> */}
    </>
  );
};

export default QuestionDetailPage;
