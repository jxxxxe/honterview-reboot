'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/shared/components/button';
import Logo from '@/shared/components/logo';

const NotFound = () => {
  const router = useRouter();

  const handlePrevPage = () => {
    router.back();
  };

  return (
    <div className="fit-wrap flex flex-col items-center justify-center gap-16">
      <Logo
        width={150}
        height={150}
      />
      <h1 className="text-center text-[3.6rem]">존재하지 않는 페이지입니다.</h1>
      <div className="flex items-center gap-16">
        <Link href="/">
          <Button className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium">
            메인 페이지
          </Button>
        </Link>
        <Button
          onClick={handlePrevPage}
          className="h-auto w-auto px-[1rem] py-[0.5rem] text-small text-white md:text-medium"
        >
          이전 페이지
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
