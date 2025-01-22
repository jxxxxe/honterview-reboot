import { notify } from '@/shared/components/toast';

import usePresettingDataStore from '../../shared/stores/presetting/usePresettingDataStore';
import createQuestion from '@/shared/services/question/create-question';
import { TEMPORARY_USER_ID } from '@/shared/constants/question';

const usePresetting = () => {
  const { firstQuestion, firstQuestionTagList } = usePresettingDataStore();

  const createFirstQuestion = async () => {
    if (firstQuestionTagList.length < 1) {
      notify('warning', '첫 질문의 태그를 올바르게 선택해주세요');
      return;
    }

    if (!firstQuestion) {
      notify('warning', '첫 질문을 올바르게 선택해주세요');
      return;
    }

    const createdQuestion = await createQuestion(
      firstQuestion.name,
      firstQuestionTagList,
      TEMPORARY_USER_ID,
    );

    return createdQuestion.id;
  };

  return { createFirstQuestion };
};

export default usePresetting;
