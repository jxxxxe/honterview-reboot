'use client';

import useMediaRecorder from '../../hooks/useMediaRecorder';

const RecoderSection = () => {
  const { videoRef } = useMediaRecorder();

  return (
    <video
      className={`max-h-[calc(100vh-20rem)] scale-x-[-1] object-contain`}
      ref={videoRef}
      autoPlay
      muted
    />
  );
};

export default RecoderSection;
