'use client';

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
      <button
        onClick={handleRefreshPage}
        className="navigation-button flex gap-3 transition-none hover:scale-100"
      >
        새로고침
        <ArrowPathIcon className="size-8" />
      </button>
    </div>
  );
};

export default ErrorPage;
