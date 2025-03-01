import SectionAnimationWrapper from '../section-animation-wrapper';
import useVideoCheckScene from './useVideoCheckScene';

const VideoCheckScene = () => {
  const { currentStep } = useVideoCheckScene();
  const { videoRef } = useVideoCheckScene();

  if (currentStep !== 4) {
    return;
  }

  return (
    <SectionAnimationWrapper
      className={`mt-[1rem] flex items-center justify-center ${currentStep !== 4 && 'hidden'}`}
    >
      <video
        className={`h-full scale-x-[-1] bg-black`}
        ref={videoRef}
        autoPlay
        muted
      />
    </SectionAnimationWrapper>
  );
};

export default VideoCheckScene;
