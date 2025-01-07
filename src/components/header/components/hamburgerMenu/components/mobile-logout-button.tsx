'use client';

import { useRouter } from 'next/navigation';

const MobileLogoutButton = () => {
  const router = useRouter();

  const handleLogOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    // await logOut();
    router.refresh();
  };

  return (
    <form>
      <button
        type="submit"
        onClick={handleLogOut}
        className="w-full px-10 py-4 text-center hover:bg-background-20"
      >
        로그아웃
      </button>
    </form>
  );
};

export default MobileLogoutButton;
