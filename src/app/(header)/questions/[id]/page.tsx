import AnswerList from '@/containers/question-detail/components/answer-list';
import { notFound } from 'next/navigation';
import QuestionDetailHeader from '@/containers/question-detail/components/question-detail-header';
import TailQuestions from '@/containers/question-detail/components/tail-questions';

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
    <div className="flex flex-col gap-5">
      <QuestionDetailHeader questionId={questionId} />
      <AnswerList questionId={questionId} />
      <TailQuestions questionId={questionId} />
    </div>
  );
};

export default QuestionDetailPage;
