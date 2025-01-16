import LoadingIcon from '@/shared/components/loading-icon';
import Image from 'next/image';

const PageLoading = () => {
  return (
    <div className="wrap flex w-full flex-col items-center justify-center gap-3">
      <LoadingIcon />
    </div>
  );
};

export default PageLoading;
