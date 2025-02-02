'use client';

import useMediaRecorder from '../../hooks/useMediaRecorder';

const RecoderSection = () => {
  const { videoRef } = useMediaRecorder();

  return (
    <video
      className={`h-full scale-x-[-1] bg-black`}
      ref={videoRef}
      autoPlay
      muted
    />
  );
};

export default RecoderSection;
