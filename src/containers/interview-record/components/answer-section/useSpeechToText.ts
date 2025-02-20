'use client';

import { notify } from '@/shared/components/toast';
import useInterviewQuestionAnswerStore from '@/shared/stores/interview/useInterviewQuestionAnswerStore';
import { useCallback, useEffect, useState } from 'react';

const useSpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null,
  );
  const { appendToCurrentAnswer } = useInterviewQuestionAnswerStore();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const speechRecognition = new window.webkitSpeechRecognition();
      speechRecognition.lang = 'ko-KR';
      speechRecognition.interimResults = true;
      speechRecognition.continuous = true;

      speechRecognition.onresult = (event) => {
        let interimTranscript = '';
        const { resultIndex, results } = event;

        console.log('>>', resultIndex, results);

        for (let i = resultIndex; i < results.length; i++) {
          if (results[i].isFinal) {
            const resultText = results[i][0].transcript;
            console.log('>>', resultText);
            setTranscript((prev) => prev + resultText);
            appendToCurrentAnswer(resultText);
          } else {
            interimTranscript += results[i][0].transcript;
          }
        }
      };

      speechRecognition.onerror = (event) => {
        notify('error', `음성 인식 중 오류가 발생했습니다 : ${event.error}`);
      };

      speechRecognition.onstart = () => {
        console.log('onstart', isListening);
        setIsListening(true);
      };

      speechRecognition.onend = () => {
        console.log('onend', isListening);
        setIsListening(false);
      };

      setRecognition(speechRecognition);
    } else {
      return notify(
        'error',
        'Speech To Text 서비스가 이 브라우저에서 지원되지 않습니다',
      );
    }
  }, []);

  const startListening = useCallback(() => {
    if (recognition && !isListening) {
      console.log('startListening', isListening);
      setTranscript('');
      recognition.start();
    }
  }, [recognition, isListening]);

  const stopListening = useCallback(() => {
    if (recognition && isListening) {
      console.log('stopListening', isListening);
      recognition.stop();
    }
  }, [recognition, isListening]);

  useEffect(() => {
    startListening();

    return () => stopListening();
  }, [startListening, stopListening]);

  return {
    isListening,
    answerText: transcript,
  };
};

export default useSpeechToText;
