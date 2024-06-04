import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header"
import FooterComp from "../Components/Common/Footer";
import HeroParSlider from "../Components/HeroParSlider";
import useIntersectionObserver from "../Components/Common/Observer";
import Vid1 from "../Vids/vecteezy_a-man-is-working-on-his-computer_45687905.mp4"
import Vid2 from "../Vids/vecteezy_two-people-sitting-at-a-table-drinking-wine_45679096.mp4"
import useSlowScroll from "../Components/Common/SlowScroll";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Enter = () => {

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('.mainpage'),
  //     smooth: true,
  //     multiplier: 0.6 // Adjust this value to slow down the scroll speed
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);
  // useSlowScroll(1)
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



  const [isVisible1, setIsVisible1] = useState(true);
  
  const handleIntersection = (entry) => {
    // setD(!entry.isIntersecting);
    if (entry.isIntersecting === false){
      setIsVisible1(false)
    }else{
      setIsVisible1(true)
    }
  };
  
  const elementRef = useIntersectionObserver(handleIntersection, { threshold: 0.1 });



    return (
        <div className="p-0 m-0 mainpage">
          {<Header />}
          <HeroParSlider ele={elementRef}/>
          <div style={{
            marginTop : "60vw",
           
          }}>
      <div style={{
         display : "flex",
         overflow : "hidden"
      }}>
        <video autoPlay loop muted style={{
          width:"48vw",
          marginLeft:"-9vw"
        }}>
          <source src={Vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <span style={{
          display: "block",
          fontSize:"6vw",
          marginTop : "8vw",
          color : "#021588",
          lineHeight : "6vw"
        }}
        className="eni"
        >
        It’s time <br/>
          to  <span style={{
            color:"#FFD900"
          }}>
          Bask
            </span>
        </span>
        <video autoPlay loop muted style={{
          width:"48vw",
          marginRight:"-20vw"
        }}>
          <source src={Vid2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
          </div>
          <FooterComp/>
        </div>
      );
}

export default Enter


