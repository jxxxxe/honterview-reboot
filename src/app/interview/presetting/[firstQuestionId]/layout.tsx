import { PropsWithChildren } from 'react';

interface PresettingLayoutProps extends PropsWithChildren {
  params: Promise<{ firstQuestionId: string }>;
}

const PresettingLayout = ({ children }: PresettingLayoutProps) => {
  return (
    <div className="flex h-[calc(100vh-7rem)] items-center justify-center bg-opacity-10">
      {children}
    </div>
  );
};

export default PresettingLayout;
