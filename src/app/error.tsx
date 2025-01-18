'use client';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ErrorPage = () => {
  return (
    <div className="h-full w-full">
      <ExclamationTriangleIcon />
      에러가 발생했습니다.
    </div>
  );
};

export default ErrorPage;
