import Card from './Card';
import WordAnimation from './Wordanimation';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ScrollAnimation = () => {
  const [scrollDisabled, setScrollDisabled] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const words = ["Brand  Strategy", "Advertising", "Films", "Branding" , "Social Media", "Photography", "Web Design"];
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [uniqueKey, setUniqueKey] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => {
              const nextIndex = (prevIndex + 1) % words.length;
              setUniqueKey((prevKey) => prevKey + 1); // Increment the unique key
              return nextIndex;
            });
          }, 2000);
        return () => clearInterval(intervalId);
      }, [words.length]);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const threshold1 = 100; // Threshold for the first transition
    const threshold2 = 5900; // Threshold for the second transition
    const threshold3 = 5900; // Threshold for the third transition

    const [juju , setJuju] = useState(false)

    useEffect(() => {
        if (scrollDisabled){
          // const timeoutId = setTimeout(() => {
          //   setJuju(false)
          // }, 2000); // Disable scroll for 2 seconds
          const timeoutId = setTimeout(() => {
            console.log("Timeout callback triggered. Enabling scrolling.");
            setScrollDisabled(false);
          }, 1000); // Disable scroll for 1 second
    
          // Cleanup function to clear the timeout
          return () => clearTimeout(timeoutId);
        }
    }, [juju])

    useEffect(() => {
      console.log("Scroll position:", scrollPosition);
      console.log("Juju:", juju);
    
      if (scrollPosition > 300 && scrollPosition < 400) {
        console.log("Condition met. Setting juju and disabling scrolling.");
    
        setScrollDisabled(true);
    
        // Cleanup function to clear the timeout
        // return () => clearTimeout(timeoutId);
      }
    }, [scrollPosition, juju, threshold1]);

    // useEffect(() => {
    //   // Apply CSS styles to disable scrolling when scrollDisabled is true
    //   if ( scrollDisabled) {
    //     document.body.style.overflow = 'hidden';
    //     const timeoutId = setTimeout(() => {
    //       document.body.style.overflow = 'auto';
    //     }, 3000); // Disable scroll for 1 second
  
    //     // Cleanup function to clear the timeout
    //     return () => clearTimeout(timeoutId);
    //   } else {
    //     // Re-enable scrolling if scrollDisabled is false
    //     document.body.style.overflow = 'auto';
    //   }
    // }, [scrollDisabled]);


    const para1Style = {
        transform: scrollPosition > threshold2 ? 'scale(0.5) translateY(-50px)' : 'scale(1)',
        fontSize: scrollPosition > threshold2 ? '1em' : scrollPosition > threshold1 ? '50em' : '2em',
        opacity: scrollPosition > threshold2 ? 0 : 1,
        transition: 'transform 0.3s ease, font-size 0.3s ease, opacity 0.3s ease, top 2s ease, position 1s ease',
        position: scrollPosition > threshold1 ? 'fixed' : 'fixed',
        top: scrollPosition > threshold1 ? '16vw' : '40%',
    };

    const para2Style = {
        transform: scrollPosition > threshold2 ? 'scale(0.5)' : scrollPosition > threshold1 ? 'scale(1) translateY(-50px)' : 'scale(0.5)',
        fontSize: scrollPosition > threshold2 ? '1vw' : scrollPosition > threshold1 ? '3.5vw' : '1vw',
        opacity: scrollPosition > threshold2 ? 0 : scrollPosition > threshold1 ? 1 : 0,
        transition: 'transform 1s ease, font-size 1s ease, opacity 0.3s ease',
        position: scrollPosition > (threshold1 - 20) ? 'fixed' : 'inherit',
        top: '28vw',
    };

    const styleI = {
        position: scrollPosition > threshold3 ? 'inherit' : 'fixed',
        top: scrollPosition > threshold3 ? '15vw' : '20%',
        marginTop: scrollPosition > threshold3 ? '10vw' : '',
        width: '30%',
        marginLeft: '65vw',
        opacity: scrollPosition > threshold3 ? 0 : 1,
        transform: scrollPosition > threshold2 ? 'scale(0.5)' : 'scale(1)',
        transition: 'transform 0.2s ease, opacity 1s ease',
    };

    return (
        <div>
            <div className="containerr">
                <div>
                    <div className="paragraph" style={para1Style}>
                        <WordAnimation />
                    </div>
                    <div className="paragraph mainheropara ib" style={para2Style}>
                        <p>We redefine Films</p>
                    </div>
                </div>
                <div style={styleI}>
                    <Card />
                </div>
            </div>
            <div
      className="paragraph ir"
      style={{
        width: '100%',
        height: '90%',
        margin: "0",
        display: "flex"
      }}
    >
      <div
        style={{
          width: '50%',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <AnimatePresence>
          <motion.div
            key={`${words[currentWordIndex]}-${uniqueKey}`}
            initial={{ x: '-100%' }}
            animate={{ x: 0 , transition : { duration: 0.8  , type : "spring"} }}
            exit={{ x: '100%', transition : {duration : 1.6} }}
            
            style={{
              position: 'absolute',
              whiteSpace: 'nowrap'
            }}
            className='cardsa eni'
          >
            {words[currentWordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div
      className='ib'
        style={{
          backgroundColor: '#021588',
          color: 'white',
          padding: '1vw 2vw',
          width: '50%',
          height: '100%',
          fontSize:"2vw",
          textAlign: 'right',
          paddingTop: "15%"
        }}
      >
       We are here to create work that will make a difference to our brands, their customers.  Creativity may not be the ultimate solution for the universe’s problems. But we believe <br/>it is the best weapon we have to solve a,<br></br> problems in an interesting way 
      </div>
    </div>
        </div>
    );
};

export default ScrollAnimation;
