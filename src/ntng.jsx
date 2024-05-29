import React, { useState, useEffect } from 'react';

const SmoothScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollY = window.scrollY || window.pageYOffset;

      // Set the new scroll position with a delay
      setScrollY(currentScrollY);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Adjust the scrolling speed based on the scroll position
  const handleSmoothScroll = () => {
    // Calculate the scrolling speed based on the scroll position
    const scrollSpeed = scrollY * 0.001; // Adjust this multiplier to control the speed

    // Smoothly scroll the page to the new position
    window.scrollTo({
      top: scrollY + scrollSpeed,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ height: '2000px' }}>
      <button onClick={handleSmoothScroll}>Scroll</button>
    </div>
  );
};

export default SmoothScroll;
