'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as v4uuid } from 'uuid';

import { navigationItems } from '../../navigation/constants/navigation-items';

const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-center justify-center">
        {navigationItems.map(({ url, replace, scroll, title }) => {
          const enabledStyle = pathname === url ? 'text-primaries-primary' : '';

          return (
            <li
              className={`${enabledStyle} w-full cursor-pointer px-10 py-4 text-center hover:bg-background-20`}
              key={v4uuid()}
            >
              <Link
                href={url}
                replace={replace}
                scroll={scroll}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
