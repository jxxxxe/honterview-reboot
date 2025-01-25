'use client';

import { apiFetch } from '@/shared/utils/apiFetch';
import { useEffect, useRef, useState } from 'react';

const useMediaRecorder = () => {
  const videoRef = useRef<HTMLVideoElement>(null); //비디오 스트림을 참조
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>(); //녹화된 데이터 저장
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }); //카메라, 마이크 접근

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    const recoder = new MediaRecorder(stream); // 녹화 레코더

    recoder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    recoder.start();

    setMediaRecorder(recoder);
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

  const uploadVideo = async () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });

    const formData = new FormData();
    formData.append('video', blob);

    const data = await apiFetch('api/interview/record', {
      method: 'POST',
      body: formData,
    });

    return data.videoUrl;
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
    startRecording,
    stopRecording,
    uploadVideo,
  };
};

export default useMediaRecorder;
