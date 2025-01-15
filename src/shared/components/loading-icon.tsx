import Image from 'next/image';

const LoadingIcon = () => {
  return (
    <>
      <Image
        width={100}
        height={100}
        src={'/logo-removebg.png'}
        alt="honterview-logo"
        className="animate-bounce opacity-50"
      />
      <span className="font-mono text-2xl opacity-50">Loading...</span>
    </>
  );
};

export default LoadingIcon;
