import RecoderSection from '@/containers/interview-record/components/recoder-section';
import TimerSection from '@/containers/interview-record/components/timer-section';
import '@/containers/interview-record/components/answer-section/style.css';
import CompleteRecordButton from '@/containers/interview-record/components/compelete-record-button';
import NextQuestionButton from '@/containers/interview-record/components/next-question-button';
import QuestionSection from '@/containers/interview-record/components/question-section';
import AnswerSection from '@/containers/interview-record/components/answer-section';

const RecordInterviewPage = () => {
  return (
    <div className="mx-auto flex h-screen min-w-[30rem] max-w-screen-lg flex-col items-center justify-center rounded-3xl bg-text-20 bg-opacity-20 px-10 py-8 pt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <TimerSection />
      <div className="flex w-full justify-center py-[1.5rem] text-[2rem]">
        <QuestionSection />
      </div>
      <div className="relative flex max-h-fit w-full flex-col gap-6 overflow-hidden">
        <RecoderSection />
        <AnswerSection />
      </div>
      <div className="flex items-end justify-center gap-5 pt-8">
        <CompleteRecordButton />
        <NextQuestionButton />
      </div>
    </div>
  );
};

export default RecordInterviewPage;
