import Link from 'next/link';

import LogoutButton from './components/logout-button';
import DividerVertical from '@/components/divider-vertical';

const LinkButtons = async () => {
  return (
    <div className="hidden min-w-[10%] items-center justify-end gap-6 md:flex">
      <div className="flex items-center justify-end gap-6">
        <Link href="/mypage">마이페이지</Link>
        <DividerVertical />
        <LogoutButton />
      </div>
    </div>
  );
};

export default LinkButtons;
