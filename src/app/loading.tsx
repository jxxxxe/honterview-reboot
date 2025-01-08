import Image from 'next/image';

const PageLoading = () => {
  return (
    <div className="wrap flex w-full flex-col items-center justify-center gap-3">
      <Image
        width={100}
        height={100}
        src={'/logo-removebg.png'}
        alt="honterview-logo"
        className="animate-bounce opacity-50"
      />
      <span className="font-mono text-2xl opacity-50">Loading...</span>
    </div>
  );
};

export default PageLoading;
