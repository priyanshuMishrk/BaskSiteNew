import Card from './Card';
import WordAnimation from './Wordanimation';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ScrollAnimation = () => {
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



    const [visibleWords, setVisibleWords] = useState([]);
    const [invv , setInvv] = useState(false)

    useEffect(() => {
      console.log(invv)
      if (invv){
        const words = document.querySelectorAll('.heroVid .word2');
        let delay = 1000; // Initial delay for the first word
        words.forEach((word, index) => {
            setTimeout(() => {
                setVisibleWords(prevState => [...prevState, index]);
            }, delay + index * 100); // Each subsequent word appears after 0.5 seconds
        });
      } else{
        setVisibleWords([])
      }
    }, [invv]);

    const containerRef = useRef(null);

    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       setInvv(entry.isIntersecting);
    //       console.log(invv)
    //     },
    //     {
    //       threshold: 0.1, // Adjust this value as needed
    //     }
    //   );
  
    //   if (containerRef.current) {
    //     observer.observe(containerRef.current);
    //   }
  
    //   return () => {
    //     if (containerRef.current) {
    //       observer.unobserve(containerRef.current);
    //     }
    //   };
    // }, [containerRef, invv]);


    useEffect(() => {
      const interval = setInterval(() => {
        setInvv(prevToggle => !prevToggle);
      }, 5000); // 5000 milliseconds = 5 seconds
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }, []);


    

    return (
        <div>
          {/* <div className="heroVid im">
            <video autoplay loop muted playsinline>
              <source src="https://res.cloudinary.com/dcutzde3o/video/upload/v1717587182/Home_page_video_why._online-video-cutter.com_1_dqdthy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <div className='heroVidDiv'>
              <div className="line2">
                        <span className={visibleWords.includes(0) ? "word2 visible2" : "word2"} >Fuel</span>
                        <span className="space2"> </span>
                        <span className={visibleWords.includes(1) ? "word2 visible2" : "word2"} >the</span>
                        <span className="space2"> </span>
                        <span className={visibleWords.includes(2) ? "word2 visible2" : "word2"} >passion</span>
                    </div>
                    <div className="line2">
                        <span className={visibleWords.includes(4) ? "word2 visible2" : "word2"} >Set</span>
                        <span className="space2"> </span>
                        <span className={visibleWords.includes(5) ? "word2 visible2" : "word2"} >fire</span>
                        <span className="space2"> </span>
                        <span className={visibleWords.includes(6) ? "word2 visible2" : "word2"} >to</span>
                        <span className="space2"> </span>
                        <span className={visibleWords.includes(7) ? "word2 visible2" : "word2"} >your</span>
                        <span className="space2"> </span>
                        <span className={visibleWords.includes(7) ? "word2 visible2" : "word2"} >imagination.</span>
                    </div>
                    </div>
              <div className="checkkkerrr" ref={containerRef}>

              </div>
            </div> */}


            <div className="containerr">
                <div>
                    <div className=" p1c1p2c2">
                        <WordAnimation />
                    </div>
                </div>
                <div>
                    <Card />
                </div>
            </div>

            


            
            <div
      className="judioMain ir"
    >
      <div
        style={{
          width: '50%',
          overflowX: 'hidden',
          position: 'relative'
        }}
        className='judioCardey'
      >
        <AnimatePresence>
          <motion.div
            key={`${words[currentWordIndex]}-${uniqueKey}`}
            initial={{ x: '-100%' }}
            animate={{ x: 0 , transition : { duration: 0.8  , type : "spring"} }}
            exit={{ x: '100%', transition : {duration : 1.6} }}
            
            style={{
              position: 'absolute',
              whiteSpace2: 'nowrap'
            }}
            className='cardsa eni'
          >
            {words[currentWordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div
      className='ib jalat'
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
