'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { AnimationWrapperProps } from './type';

const MainOuttroAnimationWrapper = ({
  children,
  className,
}: AnimationWrapperProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsViewed(true);
    }
  }, [inView]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (isViewed) {
      timer = setTimeout(() => {
        setIsViewed(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isViewed]);

  return (
    <div
      ref={ref}
      className={`${isViewed && 'outtro'} ${className}`}
    >
      {children}
    </div>
  );
};

export default MainOuttroAnimationWrapper;
