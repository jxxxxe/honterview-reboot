import Link from 'next/link';

// TODO: 로그인 여부에 삼항연산자 필요
const MobileAuthButtons = async () => {
  return (
    <ul className="flex flex-col items-center">
      <>
        <Link
          href="/mypage"
          className="w-full px-10 py-4 text-center hover:bg-background-20"
        >
          마이페이지
        </Link>
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

export default MobileAuthButtons;
