import SectionAnimationWrapper from '../section-animation-wrapper';
import useVideoCheckScene from './useVideoCheckScene';

const VideoCheckScene = () => {
  const { currentStep } = useVideoCheckScene();

  if (currentStep !== 4) {
    return;
  }

  return (
    <SectionAnimationWrapper
      className={`mt-[1rem] flex items-center justify-center ${currentStep !== 4 && 'hidden'}`}
    >
      {/* <MirrorView
        stream={previewStream}
        isLoading={isLoading}
        error={error}
        className="h-full"
      /> */}
    </SectionAnimationWrapper>
  );
};

export default VideoCheckScene;
