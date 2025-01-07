import { PropsWithChildren } from 'react';

export interface ChatBubbleProps extends PropsWithChildren {
  className?: string;
  isAnswer?: boolean;
}
