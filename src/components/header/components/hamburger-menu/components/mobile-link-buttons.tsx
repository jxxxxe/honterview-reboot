import Link from 'next/link';

import MobileLogoutButton from './mobile-logout-button';

// TODO: 로그인 여부에 삼항연산자 필요
const MobileLinkButtons = async () => {
  return (
    <ul className="flex flex-col items-center">
      <>
        <Link
          href="/mypage"
          className="w-full px-10 py-4 text-center hover:bg-background-20"
        >
          마이페이지
        </Link>
        {/* <MobileLogoutButton /> */}
      </>
      <Link
        href="/auth/login"
        className="w-full px-10 py-4 text-center hover:bg-background-20"
      >
        로그인
      </Link>
    </ul>
  );
};

export default MobileLinkButtons;
