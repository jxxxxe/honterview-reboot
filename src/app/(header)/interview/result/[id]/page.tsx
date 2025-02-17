import DownloadButton from '@/containers/interview-result/components/download-button';
import QuestionAnswerSection from '@/containers/interview-result/components/question-answer-section';
import VideoPlayer from '@/containers/interview-result/components/video-player';
import getInterview from '@/shared/services/interview/get-interview';
import { notFound } from 'next/navigation';

interface InterviewResultPageProps {
  params: Promise<{ id: string }>;
}

const InterviewResultPage = async ({ params }: InterviewResultPageProps) => {
  const { id } = await params;
  const interveiwId = Number(id);

  if (isNaN(interveiwId)) {
    notFound();
  }

  const interview = await getInterview(interveiwId);

  if (!interview) {
    notFound();
  }

  const {
    questions,
    answers,
    firstQuestionId,
    interview_type,
    timers,
    video,
    firstAnswer,
    created_at,
  } = interview;
  const isRecord = interview_type === 'RECORD' && !!video.url;

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="mb-20 flex gap-5">
        <h1 className="text-tripleLarge font-semibold">면접 결과</h1>
        <div className="flex items-center">
          {interview_type === 'RECORD' ? (
            <div className="rounded-lg border border-primaries-primary px-[1.5rem] py-[0.5rem] text-large font-semibold text-primaries-primary">
              화상
            </div>
          ) : (
            <div className="rounded-lg border border-green-600 px-[1.5rem] py-[0.5rem] text-large font-semibold text-green-600">
              채팅
            </div>
          )}
        </div>
      </div>
      {isRecord && (
        <div className="mb-10 flex w-full justify-center">
          <VideoPlayer src={video.url} />
        </div>
      )}
      <div className="mb-10 flex w-full max-w-7xl flex-col gap-10">
        <QuestionAnswerSection
          questionList={questions}
          answerList={answers}
          firstQuestionId={firstQuestionId}
          firstAnswer={firstAnswer}
          timers={timers}
        />
      </div>
      {isRecord && (
        <DownloadButton
          createdAt={created_at}
          downloadUrl={video.downloadUrl}
        />
      )}
    </div>
  );
};

export default InterviewResultPage;
