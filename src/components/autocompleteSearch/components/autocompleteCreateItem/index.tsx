import { notify } from '@/components/toast';

import { useAutocomplete } from '../../contexts';
import { QUESTION_MIN_LENGTH } from '../constants';

const AutocompleteCreateItem = () => {
  const { inputValue, handleItemClick, isCreateVisible } = useAutocomplete();

  const inputValueTrim = inputValue.trim();
  if (!inputValueTrim || !isCreateVisible) {
    return;
  }

  return (
    <button
      type="button"
      className="z-20 flex h-fit min-h-[3rem] w-full items-center border bg-white py-[0.5rem] pl-[0.5rem] hover:bg-slate-100 focus:outline-none"
      onClick={() => {
        if (inputValueTrim.length < QUESTION_MIN_LENGTH) {
          notify(
            'warning',
            `질문은 앞 뒤 공백 제외 ${QUESTION_MIN_LENGTH}자 이상이어야 합니다`,
          );
          return;
        }
        handleItemClick({
          id: 'new',
          name: inputValueTrim,
        });
      }}
    >
      <p className="max-w-[26rem] overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold text-primaries-primary">
        {inputValueTrim}
      </p>
      (으)로 질문 생성하기
    </button>
  );
};

export default AutocompleteCreateItem;
