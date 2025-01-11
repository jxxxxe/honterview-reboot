import Link from 'next/link';

import DividerVertical from '@/shared/components/divider-vertical';

const AuthButtons = async () => {
  return (
    <div className="hidden min-w-[10%] items-center justify-end gap-6 md:flex">
      {/* <div className="flex items-center justify-end gap-6"> */}
      <Link href="/mypage">마이페이지</Link>
      {/* <DividerVertical /> */}
      {/* </div> */}
    </div>
  );
};

export default AuthButtons;
