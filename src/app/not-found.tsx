'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import Logo from '@/components/logo';

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
      <h1 className="text-tripleLarge text-center">
        존재하지 않는 페이지입니다.
      </h1>
      <div className="flex items-center gap-16">
        <Link href="/">
          <Button className="text-small md:text-medium h-auto w-auto px-[1rem] py-[0.5rem] text-white">
            메인 페이지
          </Button>
        </Link>
        <Button
          onClick={handlePrevPage}
          className="text-small md:text-medium h-auto w-auto px-[1rem] py-[0.5rem] text-white"
        >
          이전 페이지
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
