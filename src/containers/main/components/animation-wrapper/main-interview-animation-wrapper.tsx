'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { AnimationWrapperProps } from './type';

interface MainInterviewAnimationWrapperProps extends AnimationWrapperProps {
  isLeft: boolean;
}

const MainInterviewAnimationWrapper = ({
  children,
  className,
  isLeft,
}: MainInterviewAnimationWrapperProps) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const opacityVariants = {
    hidden: {
      transform: isLeft ? 'translateX(-20%)' : 'translateX(50%)',
    },
    visible: {
      transform: 'translateX(0)',
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={opacityVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MainInterviewAnimationWrapper;
