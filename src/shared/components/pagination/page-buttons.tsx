import { HTMLAttributes, useContext } from 'react';

import { PaginationContext } from './contexts';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const PageButtons = ({ ...rest }: IProps) => {
  const { createPageButtons } = useContext(PaginationContext);

  return <>{createPageButtons(rest.className)}</>;
};

export default PageButtons;
