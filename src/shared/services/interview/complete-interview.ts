import { apiFetch } from '@/shared/utils/apiFetch';

export const completeInterview = async (
  questionList: string[],
  answerList: string[],
  userId: number,
  firstQuestionId: number,
  timerList: number[],
  videoFormData: FormData,
  onFinish: (interviewId: number) => void,
) => {
  const { interviewId } = await apiFetch('api/interview/record', {
    method: 'POST',
    body: JSON.stringify({
      questionList,
      answerList: [''],
      userId,
      firstQuestionId,
      timerList,
    }),
  });

  await apiFetch(`api/interview/record/${interviewId}/video`, {
    method: 'POST',
    body: videoFormData,
  });

  onFinish(interviewId);
};
