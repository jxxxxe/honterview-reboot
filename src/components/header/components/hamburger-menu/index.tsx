'use client';

import { PropsWithChildren, useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';

const HamburgerMenu = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState(false);

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
          <Bars3Icon className="size-10" />
        </button>
      </div>
      {active && children}
    </>
  );
};

export default HamburgerMenu;
