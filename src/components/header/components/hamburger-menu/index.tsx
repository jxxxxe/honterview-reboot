'use client';

import { PropsWithChildren, useState } from 'react';

// import { HamburgerIcon } from '@/components/icon';

import { Bars3Icon } from '@heroicons/react/24/outline';

const HamburgerMenu = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState(true);

  const handleToggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      <div className="block text-[3rem] md:hidden">
        <button
          type="button"
          onClick={handleToggleActive}
          className="flex items-center justify-center"
        >
          <Bars3Icon />
        </button>
      </div>
      {active && children}
    </>
  );
};

export default HamburgerMenu;
