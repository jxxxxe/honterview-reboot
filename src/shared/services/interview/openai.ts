import { apiFetch } from '@/shared/utils/apiFetch';

export const createNewQuestion = async (
  firstQuestionTagList: string[],
  addQuestion: (question: string) => void,
  questionList: string[],
) => {
  const newQuestion = await apiFetch('api/interview/openai/question', {
    method: 'POST',
    body: JSON.stringify({
      questionCategoryList: firstQuestionTagList,
      prevQuestion: questionList[questionList.length - 1],
      prevResponse: '',
    }),
  });

  addQuestion(newQuestion.reply);
};

export const recreateQuestion = async (
  currentQuestion: string,
  answerList: string[],
  changeQuestion: (question: string) => void,
) => {
  const { reply } = await apiFetch('api/interview/openai/question/new', {
    method: 'POST',
    body: JSON.stringify({
      prevAnswer: answerList.length ? answerList[answerList.length - 1] : '',
      currentQuestion,
    }),
  });

  changeQuestion(reply);
};
