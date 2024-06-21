import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header"
import FooterComp from "../Components/Common/Footer";
import HeroParSlider from "../Components/HeroParSlider";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LazyLoad from 'react-lazyload';


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
          <div className="mainmainviddiv">
      <div style={{
         display : "flex",
         overflow : "hidden",
         flexDirection : "row"
      }} className="mainVideoDiv">
        <video autoPlay loop muted 
        className="mainVideo mainVideol"
        style={{
          width:"48vw",
          marginLeft:"-9vw"
        }}>
          <source src="https://d1bxlu89wy43u2.cloudfront.net/vecteezy_a-man-is-working-on-his-computer_45687905.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <span
        className="eni mainVidPara"
        >
        It’s time <br/>
          to  <span style={{
            color:"#FFD900"
          }}>
          Bask
            </span>
        </span>
        <video autoPlay loop className="mainVideo mainVideor" style={{ width: '48vw', marginRight: '-20vw', opacity:"1" }}>
      <source src="https://d1bxlu89wy43u2.cloudfront.net/vecteezy_two-people-sitting-at-a-table-drinking-wine_45679096.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>
          </div>
          <FooterComp/>
        </div>
      );
}

export default Enter


