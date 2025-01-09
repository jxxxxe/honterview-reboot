import { motion } from 'framer-motion';

export interface AnimationWrapperProps extends React.PropsWithChildren {
  className?: string;
}

export const pageEffect = {
  initial: {
    x: '100%',
  },
  in: {
    x: 0,
  },
  out: {
    x: '-100%',
  },
};

const SectionAnimationWrapper = ({
  children,
  className,
}: AnimationWrapperProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.3 }}
      variants={pageEffect}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimationWrapper;
