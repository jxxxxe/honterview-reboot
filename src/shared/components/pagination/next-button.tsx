import { useContext } from 'react';

import { PaginationContext } from './contexts';
import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const NextButton = ({ ...rest }: IProps) => {
  const { handleMoveNextPage, isLastNumbers } = useContext(PaginationContext);

  return (
    !isLastNumbers && (
      <button
        type="button"
        onClick={handleMoveNextPage}
        {...rest}
      >
        {'>'}
      </button>
    )
  );
};

export default NextButton;
