'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button, { ButtonType } from '@/shared/components/button';
import Logo from '@/shared/components/logo';
import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

const NotFound = () => {
  const router = useRouter();

  const handlePrevPage = () => {
    router.back();
  };

  return (
    <div className="fit-wrap flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <XCircleIcon className="mb-[-1rem] size-16 text-neutral-500 opacity-50" />
        <Logo
          className="opacity-50"
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-center text-[2.5rem] font-semibold">
        존재하지 않는 페이지입니다
      </h1>
      <div className="flex items-center gap-5">
        <Button
          styleType={ButtonType.Type3}
          onClick={handlePrevPage}
          className="h-auto w-auto px-[1rem] py-[0.8rem] text-small text-white md:text-medium"
        >
          이전 페이지
        </Button>
        <Link href="/">
          <Button
            styleType={ButtonType.Type3}
            className="h-auto w-auto px-[1rem] py-[0.8rem] text-small text-white md:text-medium"
          >
            메인 페이지
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
