import DownloadButton from '@/containers/interview-result/components/download-button';
import QuestionAnswerSection from '@/containers/interview-result/components/QuestionAndAnswer';
import SaveResultButton from '@/containers/interview-result/components/save-result-button';
import VideoPlayer from '@/containers/interview-result/components/video-player';
import getInterview from '@/shared/services/interview/get-interview';
import { IInterviewType } from '@/shared/types/interview';
import { notFound } from 'next/navigation';
import { v4 } from 'uuid';

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

  const { questions, answers, firstQuestionId, interview_type, timers, video } =
    interview;
  const isRecord = interview_type === 'RECORD' && !!video.url;

  return (
    <>
      <div className="mb-20 flex items-center gap-5">
        <h1 className="text-tripleLarge font-semibold">면접 결과</h1>
      </div>
      {isRecord && (
        <div>
          <div className="mb-5 aspect-video rounded bg-slate-50">
            <VideoPlayer src={video.url} />
          </div>
          <DownloadButton downloadUrl={video.downloadUrl} />
        </div>
      )}
      <div className="flex max-w-7xl flex-col gap-10">
        <QuestionAnswerSection
          key={v4()}
          questionList={questions}
          answerList={answers}
          firstQuestionId={firstQuestionId}
          timers={timers}
          interviewType={interview_type as IInterviewType}
        />
        <div className="flex justify-center gap-20">
          <SaveResultButton interviewId={interveiwId} />
        </div>
      </div>
    </>
  );
};

export default InterviewResultPage;
