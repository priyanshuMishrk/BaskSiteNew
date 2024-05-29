import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(callback, options) {
  const targetRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (callback) {
          callback(entry);
        }
      });
    }, options);

    const { current: currentObserver } = observer;
    if (targetRef.current) {
      currentObserver.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        currentObserver.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
}

export default useIntersectionObserver;