import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header"
import FooterComp from "../Components/Common/Footer";
import HeroParSlider from "../Components/HeroParSlider";

const Enter = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
      setScrollPosition(window.scrollY);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
  
  
  useEffect(() => {
    const threshold2 = 500; // Threshold for the second transition
    if (scrollPosition > threshold2 && visible) {
      setVisible(false);
    } else if (scrollPosition <= threshold2 && !visible) {
      setVisible(true);
    }
  }, [scrollPosition, visible]);
    return (
        <div className="p-0 m-0 mainpage">
          {<Header />}
          <HeroParSlider/>
          <FooterComp/>
        </div>
      );
}

export default Enter


