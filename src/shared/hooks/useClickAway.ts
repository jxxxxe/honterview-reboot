import { useEffect, useRef } from 'react';

export type TCallback = (e?: Event) => void;

const events = ['mousedown', 'touchstart'];

const useClickAway = (callback: TCallback) => {
  const ref = useRef(null);
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current as unknown as HTMLElement;

    if (!element) {
      return;
    }

    const eventHandler = (e: Event) => {
      const { target } = e;

      if (element.contains(target as Node)) {
        return;
      }

      saveCallback.current(e);
    };

    events.forEach((event) => {
      document.addEventListener(event, eventHandler);
    });

    return () => {
      events.forEach((eventName) => {
        return document.removeEventListener(eventName, eventHandler);
      });
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
