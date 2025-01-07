'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { AnimationWrapperProps } from './type';

const MainSectionAnimationWrapper = ({
  children,
  className,
}: AnimationWrapperProps) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      exit="exit"
      animate={animation}
      variants={opacityVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MainSectionAnimationWrapper;
