'use client';

import Link from 'next/link';

import Button from '@/shared/components/button';

const QuestionInterviewButton = ({ id }: { id: number }) => {
  return (
    <Button className="hidden h-[4rem] flex-none px-6 py-6 sm:flex">
      <Link href={`/interview/presetting/${id}`}>모의 면접 시작</Link>
    </Button>
  );
};

export default QuestionInterviewButton;
