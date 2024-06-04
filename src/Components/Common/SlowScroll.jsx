import { useEffect, useRef } from 'react';

const useSlowScroll = (factor = 2) => {
  const scrollDelta = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      scrollDelta.current += event.deltaY/ 10000000000 ;
      if (!isScrolling.current) {
        requestAnimationFrame(smoothScroll);
      }
    };

    const smoothScroll = () => {
      if (Math.abs(scrollDelta.current) >= 1) {
        window.scrollBy(0, scrollDelta.current);
        scrollDelta.current *= 0.9; // Reduce the scroll delta for a deceleration effect
        requestAnimationFrame(smoothScroll);
      } else {
        scrollDelta.current = 0;
        isScrolling.current = false;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [factor]);
};

export default useSlowScroll;