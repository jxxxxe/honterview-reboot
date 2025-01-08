import { SpinnerIcon } from '@/icons';
import Image from 'next/image';

const PageLoading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image
        width={5}
        height={5}
        src={'/logo-removebg.png'}
        alt="honterview-logo"
        className="animate-pulse"
      />
    </div>
  );
};

export default PageLoading;
