'use client';

import { useEffect, useRef, useState } from 'react';
import useStepStore from '@/shared/stores/presetting/useStepStore';

const useVideoCheckScene = () => {
  const { setNextButtonOn, setNextButtonOff, currentStep } = useStepStore();

  const videoRef = useRef<HTMLVideoElement>(null); //비디오 스트림을 참조
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }); //카메라, 마이크 접근

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    setIsRecording(true);
  };

  const stopRecording = () => {
    videoRef.current.srcObject = null;
    setIsRecording(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      startRecording();
    }

    if (isRecording) {
      setNextButtonOn();
    } else {
      setNextButtonOff();
    }

    return () => {
      if (videoRef.current.srcObject) {
        stopRecording();
      }
    };
  }, [videoRef.current, isRecording]);

  return {
    videoRef,
    isRecording,
    currentStep,
  };
};

export default useVideoCheckScene;
