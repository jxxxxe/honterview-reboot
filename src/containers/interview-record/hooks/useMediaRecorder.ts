'use client';

import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { apiFetch } from '@/shared/utils/apiFetch';
import { useEffect, useRef, useState } from 'react';

const useMediaRecorder = () => {
  const videoRef = useRef<HTMLVideoElement>(null); //비디오 스트림을 참조
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const [isRecording, setIsRecording] = useState(false);
  const { setVideoChuncks } = useInterviewQuestionAnswerStore(); //녹화된 데이터 저장

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }); //카메라, 마이크 접근

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    const recorder = new MediaRecorder(stream); // 녹화 레코더

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setVideoChuncks(event.data);
      }
    };

    recorder.start(1000);

    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();

    mediaRecorder.stream.getTracks().forEach((track) => {
      //트랙 : 비디오 or 오디오 장치

      track.stop(); // 카메라/마이크 장치 해제
      videoRef.current.srcObject = null;
    });

    setIsRecording(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      startRecording();
    }

    return () => {
      if (mediaRecorder?.stream) {
        stopRecording();
      }
    };
  }, [videoRef.current]);

  return {
    videoRef,
    isRecording,
  };
};

export default useMediaRecorder;
