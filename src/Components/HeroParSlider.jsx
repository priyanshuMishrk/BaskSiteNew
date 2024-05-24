// import WordAnimation from './Wordanimation';
// import React, { useState, useEffect } from 'react';

// const ScrollAnimation = () => {
//     const [scrollPosition, setScrollPosition] = useState(0);

//     const handleScroll = () => {
//         setScrollPosition(window.scrollY);
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const threshold1 = 100; // Threshold for the first transition
//     const threshold2 = 500; // Threshold for the second transition

//     // Styles for each paragraph
//     const para1Style = {
//         transform: scrollPosition > threshold1 ? 'scale(0.5) translateY(-50px)' : 'scale(1)',
//         fontSize: scrollPosition > threshold1 ? '1em' : '2em',
//         opacity: scrollPosition > threshold1 ? 0 : 1,
//         transition: 'transform 0.3s ease, font-size 0.3s ease, opacity 0.3s ease',
//     };

//     const para2Style = {
//         transform: scrollPosition > threshold2 ? 'scale(0.5)' : scrollPosition > threshold1 ? 'scale(1) translateY(-50px)' : 'scale(0.5)',
//         fontSize: scrollPosition > threshold2 ? '1vw' : scrollPosition > threshold1 ? '3vw' : '1vw',
//         opacity: scrollPosition > threshold2 ? 0 :  scrollPosition > threshold1 ? 1: 0,
//         transition: 'transform 1s ease, font-size 1s ease, opacity 0.3s ease',
//     };

//     const para3Style = {
//         transform: scrollPosition > threshold2 ? 'scale(1) translateY(-50px)' : 'scale(0.5)',
//         fontSize: scrollPosition > threshold2 ? '2em' : '1em',
//         opacity: scrollPosition > threshold2 ? 1 : 0,
//         transition: 'transform 1s ease, font-size 1s ease, opacity 0.3s ease',
//     };

//     const bgc = {
//         backgroundColor : scrollPosition > threshold2 ?"#f7f7f7": "white",
//         transition: '1s ease',
//     }

//     return (
//         <div className="containerr" 
//             style={bgc}
//         >
//             {/* First Paragraph */}
//             <div className="paragraph" style={para1Style}>
//                 <WordAnimation/>
//             </div>

//             {/* Second Paragraph */}
//             <div className="paragraph mainheropara er" style={para2Style}>
//                 <p>We redefine Films</p>
//             </div>

//             {/* Third Paragraph */}
//             <div className="paragraph mainheropara er" style={para3Style}>
//                 <p>
//                 We are here to create work that will make a difference
//                     to our brands, their customers and owners, and to the
//                     people who we interact with, everyday. Creativity may not
//                     be the ultimate solution for the universe’s problems. But
//                     we believe it is the best weapon we have to solve everyday
//                     problems in an interesting and eye-opening sort of way.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default ScrollAnimation;
















import Card from './Card';
import WordAnimation from './Wordanimation';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ScrollAnimation = () => {
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
    const threshold2 = 400; // Threshold for the second transition
    const threshold3 = 400; // Threshold for the third transition

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
       We are here to create work that will make a difference to our brands, their customers.  Creativity may not be the ultimate solution for the universe’s problems. But we believe <br/>it is the best weapon we have to solve a,<br></br> problems in an interesting way 
      </div>
    </div>
        </div>
    );
};

export default ScrollAnimation;
