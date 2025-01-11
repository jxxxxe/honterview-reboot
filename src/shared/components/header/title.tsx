import Link from 'next/link';

import Logo from '@/shared/components/logo';

const Title = () => {
  return (
    <div className="flex items-center gap-4">
      <Logo
        width={40}
        height={40}
      />
      <Link href="/">
        <h1 className="text-[3rem] font-bold">혼터뷰</h1>
      </Link>
    </div>
  );
};

export default Title;
