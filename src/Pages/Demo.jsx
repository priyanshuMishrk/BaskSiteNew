import React, { useEffect, useState } from 'react';
import Logo from "../images/Logo/BaskLogo.png";

const FooterImage = () => {
  const [imageHeight, setImageHeight] = useState(100); // initial height in percentage

  const handleScroll = () => {
    const maxHeightIncrease = 100; // maximum additional height in percentage
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollY / maxScroll) * 100;
    const newHeight = Math.min(100 + (scrollPercentage / 100) * maxHeightIncrease, 150);
    
    setImageHeight(newHeight);
  };

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 10);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return (
    <video preload="metadata" src="blob:https://saicord.com/40034115-0571-4a4d-97f4-0ab9b39b3694" x-webkit-airplay="allow" disableremoteplayback="true" pip="true"></video>
  );
};

export default FooterImage;
