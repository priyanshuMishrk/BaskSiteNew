// import { useEffect, useState } from 'react';
import fbLogo  from "../../Icons/fb 2 1.svg";
import instaLogo  from "../../Icons/insta.svg";
import LinkedinLogo  from "../../Icons/l.svg";
import Logo from "../../images/Logo/BaskLogo.png";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router";


function FooterComp() {
    const footerRef = useRef(null);
    
  const controls = useAnimation();
  const [scrollDistance, setScrollDistance] = useState(0);
  const [d, setD] = useState(true);
  const [jo, setJo] = useState(false)
  const location = useLocation();

  useEffect(() => {
    const current = location.pathname
  if (current === "/"){
    setJo(true)
  }
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight) {
          const maxScroll = 300; // Maximum scroll distance after reaching the footer for maximum height increase
          const distance = Math.min(windowHeight - footerRect.top, maxScroll);
          setScrollDistance(distance);
        } else {
          setScrollDistance(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const maxIncrease = 200; // Maximum height increase (in pixels)
    const initialHeight = 100;
    const newHeight = 100 + (scrollDistance / 300) * maxIncrease;
    if (newHeight < initialHeight + maxIncrease - 10 && d) {
        controls.start({ height: newHeight , type:"spring" });
      } else {
        controls.start({ height: initialHeight });
        setD(false)
      }
  }, [scrollDistance, controls]);




//   const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting); // Update visibility state
//       },
//       {
//         root: null,  // Use the viewport as the root
//         threshold: 0 // Trigger when even a single pixel is visible
//       }
//     );
//     if  (!isVisible){
//         setD(true)
//     }
//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

    return (
        <>
        <div className={`foot ${jo && "kkk"}`} ref={elementRef}>

            <div className="foot2">
                <div className="footLinks"> 
                  <img src={fbLogo} alt="Facebook" />
                  <img src={instaLogo} alt="Instagram" />
                  <img src={LinkedinLogo} alt="Linkedin" />
                </div>
                <div  className="footNav ib">
                   <span className="cp">Home</span>
                   <span className="cp">About us</span>
                   <span className="cp">Contact</span>
                </div>
                <div className="footContact cp ir">
                    <span  className="sayh ib">Say Hello!</span>
                    <span className="infob">info@blackis.in</span>
                </div>
            </div>
            <div className="footlogo" ref={footerRef}>
                <AnimatePresence mode="wait ">

                    <motion.img src={Logo} alt="Bask"  animate={controls}
            initial={{ height: 100 }}/>
                </AnimatePresence>
            </div>
        </div>

        </> 
    );
  }

  export default FooterComp;