import Card from './Card';
import WordAnimation from './Wordanimation';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ScrollAnimation = () => {
  const [threshold1, setThreshold1] = useState(100);
  const [threshold2, setThreshold2] = useState(5900);
  const [threshold3, setThreshold3] = useState(5900);

  // This is to make responsiveness tough and rigid (yeah the tough and rigid part was not neccesary)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



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

    const [juju , setJuju] = useState(false)

    useEffect(() => {
        if (scrollDisabled){
          const timeoutId = setTimeout(() => {
            console.log("Timeout callback triggered. Enabling scrolling.");
            setScrollDisabled(false);
          }, 1000);
          return () => clearTimeout(timeoutId);
        }
    }, [juju])

    useEffect(() => {
    
      if (scrollPosition > 300 && scrollPosition < 400) {
        console.log("Condition met. Setting juju and disabling scrolling.");
    
        setScrollDisabled(true);
      }
    }, [scrollPosition, juju, threshold1]);



    const para1Style = {
        transform: scrollPosition > threshold2 ? 'scale(0.5) translateY(-50px)' : 'scale(1)',
        fontSize: scrollPosition > threshold2 ? '1em' : scrollPosition > threshold1 ? '50em' : '2em',
        opacity: scrollPosition > threshold2 ? 0 : 1,
        transition: 'transform 0.3s ease, font-size 0.3s ease, opacity 0.3s ease, top 2s ease, position 1s ease',
    };

    const para2Style = {
        transform: scrollPosition > threshold2 ? 'scale(0.5)' : scrollPosition > threshold1 ? 'scale(1) translateY(-50px)' : 'scale(0.5)',
        fontSize: scrollPosition > threshold2 ? '1vw' : scrollPosition > threshold1 ? '3.5vw' : '1vw',
        opacity: scrollPosition > threshold2 ? 0 : scrollPosition > threshold1 ? 1 : 0,
        transition: 'transform 1s ease, font-size 1s ease, opacity 0.3s ease',
        position: scrollPosition > (threshold1 - 20) ? 'fixed' : 'inherit',
        top: '34vw',
    };

    const styleI = {
        // position: scrollPosition > threshold3 ? 'inherit' : 'fixed',
        top: scrollPosition > threshold3 ? '15vw' : '20%',
        marginTop:'6vw',
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
                </div>
                <div style={styleI}>
                    <Card />
                </div>
            </div>
            <div
      className="paragraph ir"
      style={{
        width: '100%',
        height: '100%',
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
       We are here to create work that will make a difference to our brands, their customers.  Creativity may not be the ultimate solution for the universe’s problems. But we believe <br/>it is the best weapon we have to solve a<br></br> problem in an interesting way 
      </div>
    </div>
        </div>
    );
};

export default ScrollAnimation;
