import { HTMLAttributes, useContext } from 'react';

import { PaginationContext } from './contexts';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const PrevButton = ({ ...rest }: IProps) => {
  const { handleMovePrevPage, isFirstNumbers } = useContext(PaginationContext);

  return (
    !isFirstNumbers && (
      <button
        type="button"
        onClick={handleMovePrevPage}
        {...rest}
      >
        {'<'}
      </button>
    )
  );
};

export default PrevButton;
