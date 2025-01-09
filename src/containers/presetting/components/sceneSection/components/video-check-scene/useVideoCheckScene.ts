/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useCamera } from '@/components/camera';
import useStepStore from '@/container/presetting/stores/useStepStore';

const useVideoCheckScene = () => {
  const {
    status,
    isLoading,
    isRecording,
    startRecording,
    previewStream,
    error,
    pauseRecording,
    stopRecording,
  } = useCamera();

  const { setNextButtonOn, setNextButtonOff, currentStep } = useStepStore();

  useEffect(() => {
    if (currentStep !== 4) {
      stopRecording();
      return;
    }
    startRecording();
    pauseRecording();

    if (isRecording || status === 'paused') {
      setNextButtonOn();
    } else {
      setNextButtonOff();
    }
  }, [isRecording, currentStep]);

  return {
    previewStream,
    isLoading,
    status,
    error,
    currentStep,
  };
};

export default useVideoCheckScene;
