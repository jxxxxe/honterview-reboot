import getInterview from '@/shared/services/interview/get-interview';
import { notFound } from 'next/navigation';

interface InterviewResultPageProps {
  params: Promise<{ id: string }>;
}

const InterviewResultPage = async ({ params }: InterviewResultPageProps) => {
  const { id } = await params;
  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    notFound();
  }

  const interview = await getInterview(idNumber);

  if (!interview) {
    notFound();
  }

  return <div></div>;
};

export default InterviewResultPage;
