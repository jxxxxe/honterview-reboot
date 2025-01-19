'use client';

import Button, { ButtonType } from '@/shared/components/button';
import Logo from '@/shared/components/logo';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

const ErrorPage = () => {
  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="fit-wrap flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <ExclamationTriangleIcon className="mb-[-1rem] size-16 text-red-500" />
        <Logo
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-center text-[2.5rem] font-semibold">
        에러가 발생했습니다
      </h1>
      <div className="flex items-center gap-5">
        <Button
          styleType={ButtonType.Type3}
          onClick={handleRefreshPage}
          className="flex h-auto w-auto gap-3 px-[1rem] py-[0.8rem] text-small text-white md:text-medium"
        >
          새로고침
          <ArrowPathIcon className="size-8" />
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
