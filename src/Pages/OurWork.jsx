import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header"
import FooterComp from "../Components/Common/Footer";
import Am from "../images/AngryMan.png"
import BU from "../images/building.png"
import Car from "../images/Car.png"
import Trump from "../images/Donald.png"
import Duck from "../images/duck.png"
import Water from "../images/WaterReflectionng.png"
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import MarqueeComponent from "../Components/image-carousel";


const OurWork = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(0);

    function visible(i) {
        setIsVisible2(i)
    }

    function nvisible(i) {
        setIsVisible2(i)
    }

    useEffect(() => {
        setIsVisible(true); // Trigger animation on component mount
    }, []);
    

    // const calculateTransform = () => {
    //     // Calculate transformation based on scroll position
    //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    //     const normalizedScroll = scrollPosition / maxScroll;
    //     // Calculate translation based on scroll position
    //     const translateX = (20 + normalizedScroll *  80 > 51.7057 ? 51.7057 : 20 + normalizedScroll * 10); // Change values as needed
    //     const translateY = 0; // Change values as needed

    //     return `translate(${translateX}%, ${translateY}px)`;
    // };

    // const calculateTransform1 = () => {
    //     // Calculate transformation based on scroll position
    //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    //     const normalizedScroll = scrollPosition / maxScroll;

    //     // Calculate translation based on scroll position
    //     const translateX = (65 - normalizedScroll * 10 < 13.293 ? 13.293 : 65 - normalizedScroll * 10 ); // Change values as needed
    //     const translateY = "-45%"; // Change values as needed

    //     return `translate(${translateX}%, ${translateY})`;
    // };

    // const calculateTransform2 = () => {
        
    //     // Calculate transformation based on scroll position
    //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    //     const normalizedScroll = scrollPosition / maxScroll;
    //     // Calculate translation based on scroll position
    //     const translateX =  (20 + normalizedScroll * 10 > 51.7057 ? 51.7057 : 20 + normalizedScroll * 10) // Change values as needed
    //     const translateY = '-180%'; // Change values as needed

    //     return `translate(${translateX}%, ${translateY})`;
    // };


    const [isVisible3 , setisVisible3 ] = useState(false)

    function onClicker(){
        setisVisible3(true)
    }

    function onClose(){
        setisVisible3(false)
    }



    


    return (
        <div className="p-0 m-0 mainpage">
            {<Header />}
            
            
            <div className="containerrrr">
                <p className={`left-paragraphs ib ${isVisible ? 'slide-in' : ''}`} style={{
                    textAlign: "left"
                }}>Some good. Some ok.<br /> Some nice. Some better. <br />
                    Some left.</p>
                <p className={`center-paragraph ib ${isVisible ? 'slide-in' : ''}`} style={{
                    textAlign: "right"
                }}>Some right. Some square.
                    Some <br /> centred. Some social. Some <br />print.
                    Some old. Some new.</p>
                <p className={`left-paragraph ibl ${isVisible ? 'slide-in' : ''}`}>All Ours</p>
            </div>

            <div className={`grid-container`}>
                <div className="grid-item" onMouseOver={()=>visible(1)}
                                onMouseLeave={() => nvisible(0)}
                                onClick={onClicker}
                                >
                    <img src={Car} alt="Car" className="gridimage"  />
                    <AnimatePresence>
                    { isVisible2 === 1 &&  
                    
                    <motion.div
                        className="sliding-div"
                        initial={{ x: "-50%"}}
                        animate={{ x: 0 }}
                        exit={{x:"-50%" , transition :{ duration: 0.3, ease: "easeOut" }}}
                        transition={{ duration: 0.3, ease: "easeOut"}}
                    >
                        <div className="slidCat ib">
                        Brand Strategy/ Advertising
                        </div>
                        <div className="slidTitle ib">
                        PURVANKARA
                        </div>
                        <div className="slidGen ib">
                        REAL ESTATE
                        </div>
                    </motion.div>

                    }
                    </AnimatePresence>
                </div>
               
                <div className="grid-item" onMouseOver={()=>visible(2)}
                                onMouseLeave={() => nvisible(0)}>
                    <img src={Trump} alt="Car" className="gridimage" />

                    <AnimatePresence>
                    { isVisible2 === 2 &&  
                    
                    <motion.div
                        className="sliding-div2"
                        initial={{ x: "70%"}}
                        animate={{ x: "80%" }}
                        exit={{x:"70%" , transition :{ duration: 0.3, ease: "easeOut" }}}
                        transition={{ duration: 0.3, ease: "easeOut"}}
                    >
                        <div className="slidCat2 ib">
                        What we did
                        </div>
                        <div className="slidTitle2 ib">
                        Name Of Company
                        </div>
                        <div className="slidGen2 ib">
                        Category 
                        </div>
                    </motion.div>

                    }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={()=>visible(3)}
                                onMouseLeave={() => nvisible(0)}>
                    <img src={Am} alt="Car" className="gridimage" />
                    <AnimatePresence>
                    { isVisible2 === 3 &&  
                    
                    <motion.div
                        className="sliding-div"
                        initial={{ x: "-50%"}}
                        animate={{ x: 0 }}
                        exit={{x:"-50%" , transition :{ duration: 0.3, ease: "easeOut" }}}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="slidCat ib">
                        What we did
                        </div>
                        <div className="slidTitle ib">
                        Name Of Company
                        </div>
                        <div className="slidGen ib">
                        Category 
                        </div>
                    </motion.div>

                    }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={()=>visible(4)}
                                onMouseLeave={() => nvisible(0)}>
                    <img src={BU} alt="Car" className="gridimage" />

                    <AnimatePresence>
                    { isVisible2 === 4 &&  
                    
                    <motion.div
                        className="sliding-div2"
                        initial={{ x: "70%"}}
                        animate={{ x: "80%" }}
                        exit={{x:"70%" , transition :{ duration: 0.3, ease: "easeOut" }}}
                        transition={{ duration: 0.3, ease: "easeOut"}}
                    >
                       <div className="slidCat2 ib">
                       Brand Strategy/  <br/>
Advertising/ Social Media
                        </div>
                        <div className="slidTitle2 ib">
                        PEPS
                        </div>
                        <div className="slidGen2 ib">
                        RETAIL
                        </div>
                    </motion.div>

                    }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={()=>visible(5)}
                                onMouseLeave={() => nvisible(0)}>
                    <img src={Duck} alt="Car" className="gridimage" />
                    <AnimatePresence>
                    { isVisible2 === 5 &&  
                    
                    <motion.div
                        className="sliding-div"
                        initial={{ x: "-50%"}}
                        animate={{ x: 0 }}
                        exit={{x:"-50%" , transition :{ duration: 0.3, ease: "easeOut" }}}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="slidCat ib">
                        What we did
                        </div>
                        <div className="slidTitle ib">
                        Name Of Company
                        </div>
                        <div className="slidGen ib">
                        Category 
                        </div>
                    </motion.div>

                    }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={()=>visible(6)}
                                onMouseLeave={() => nvisible(0)}>
                    <img src={Water} alt="Car" className="gridimage" />

                    <AnimatePresence>
                    { isVisible2 === 6 &&  
                    
                    <motion.div
                        className="sliding-div2"
                        initial={{ x: "70%"}}
                        animate={{ x: "80%" }}
                        exit={{x:"70%" , transition :{ duration: 0.3, ease: "easeOut" }}}
                        transition={{ duration: 0.3, ease: "easeOut"}}
                    >
                        <div className="slidCat2 ib">
                        What we did
                        </div>
                        <div className="slidTitle2 ib">
                        Name Of Company
                        </div>
                        <div className="slidGen2 ib">
                        Category 
                        </div>
                    </motion.div>

                    }
                    </AnimatePresence>
                </div>
            </div>

            <div>
                {
                    isVisible3 &&
                    <div >
                        <div className="jadennnnn">
                        <span onClick={onClose}>
                                closeeeeeeee
                        </span>
                        </div>
                        <div className="klouse">

                        </div>
                    </div>
                }
            </div>

            <MarqueeComponent dir="right" />
            <MarqueeComponent dir="left"/>
            <FooterComp />
        </div>
    );
}

export default OurWork


