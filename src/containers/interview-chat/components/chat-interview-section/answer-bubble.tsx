import { PropsWithChildren } from 'react';

const AnswerBubble = ({ children }: PropsWithChildren) => {
  if (!children) {
    return;
  }

  return (
    <div className="mr-1 flex place-content-end self-end rounded-s-3xl rounded-ee-3xl bg-text-80 px-8 py-5 text-text-20">
      {children}
    </div>
  );
};

export default AnswerBubble;
