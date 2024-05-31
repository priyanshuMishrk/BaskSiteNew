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
import Dummy from "../images/dummy.png"
import Sheafer1 from "../images/oworl/sheaffer-01-01.jpg"
import Sheafer2 from "../images/oworl/sheaffer-02-01.jpg"
import Adarsh1 from "../images/oworl/Adarsh-LF-1.jpg"
import Adarsh2 from "../images/oworl/Adarsh-LF-2.jpg"
import Adarsh3 from "../images/oworl/Adarsh-LF-3.jpg"
import pt1 from "../images/oworl/PT_full page ad_v3-01.jpg"
import pt2 from "../images/oworl/Presidential Campaign-01.jpg"
import pt3 from "../images/oworl/Presidential Campaign-07.jpg"
import sky1 from "../images/oworl/skye full page ad-01.jpg"
import sky2 from "../images/oworl/skye full page ad-02.jpg"
import sky3 from "../images/oworl/skye full page ad-03.jpg"

const OurWork = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(0);
    const [currtitle , setCurr] = useState("")
    const SomethingArray = [
        {
            title : "Sheaffer",
            description : "A clear choice of leaders, Sheaffer's campaign was built around crafting something of value- not simply in the quality of the product but also the magnitude of the moments it bears witness to. The campaign was made for the true consumers of the brand as much as it was a tribute to the history of the brand itself."
        },
        {
            title : "Adarsh",
            description : "When working on a brief from a builder as native to the Bangalore skyline as Adarsh is, the communication goes a step beyond what is asked. The campaign was written to convey a very abused word in the real estate industry, tranquility, without ever saying it. It's necessary to remain sincere when you are writing for an audience that is intelligent, and that's what we did."
        },
        {
            title : "Presidential towers",
            description : "In the luxury segment of serious real estate investment, we believe the only thing that works is direct communication with your consumer, while understanding their expectations and demands from a home that go beyond than just shelter and convenience."
        },
        {
            title : "Skyye",
            description :"A world bar, in a world city- Skyye is pure indulgence. Apart from the address, there's hardly anything about Skyye that ties it to any one place, or culture. The campaign was built on the foundation of this very insight of how the customer feels when in Skyye. A part of the world, somewhere in Bangalore."
        }
    ]
    const images = {
        Sheaffer : [ Sheafer1 , Sheafer2],
        Adarsh : [ Adarsh1 , Adarsh2 , Adarsh3 ],
        "Presidential towers" : [ pt1 , pt2 , pt3],
        Skyye : [sky1 , sky2 , sky3]

    }


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


    const [isVisible3, setisVisible3] = useState(false)
    const [currentInd, setCurentInd] = useState(0)

    function onClicker(i = 0) {
        setCurentInd(i)
        setisVisible3(true)
        setCurr(SomethingArray[i].title)
    }

    function onClose() {
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
                {/* <p className="ourWorkPar"> Our Work</p> */}
            </div>

            <div className={`grid-container`}>
                <div className="grid-item" onMouseOver={() => visible(1)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={ ()=>  onClicker(0)}
                >
                    <img src={Sheafer1} alt="Car" className="gridimage" />
                    <AnimatePresence>
                        {isVisible2 === 1 &&

                            <motion.div
                                className="sliding-div"
                                initial={{ x: "-50%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-50%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat ib">
                                    Brand Strategy/ Advertising
                                </div>
                                <div className="slidTitle ib">
                                    Sheaffer
                                </div>
                                <div className="slidGen ib">
                                    REAL ESTATE
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>

                <div className="grid-item" onMouseOver={() => visible(2)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={ ()=> onClicker(1)}
                    
                    >
                    <img src={Adarsh1} alt="Car" className="gridimage" />

                    <AnimatePresence>
                        {isVisible2 === 2 &&

                            <motion.div
                                className="sliding-div2"
                                initial={{ x: "70%" }}
                                animate={{ x: "80%" }}
                                exit={{ x: "70%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat2 ib">
                                    What we did
                                </div>
                                <div className="slidTitle2 ib">
                                 Adarsh
                                </div>
                                <div className="slidGen2 ib">
                                    Category
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={() => visible(3)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={ ()=>  onClicker(2)}
                    >
                    <img src={pt1} alt="Car" className="gridimage" />
                    <AnimatePresence>
                        {isVisible2 === 3 &&

                            <motion.div
                                className="sliding-div"
                                initial={{ x: "-50%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-50%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat ib">
                                    What we did
                                </div>
                                <div className="slidTitle ib">
                                Presidential towers 
                                </div>
                                <div className="slidGen ib">
                                    Category
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={() => visible(4)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={ ()=>  onClicker(3)}
                    >
                    <img src={sky1} alt="Car" className="gridimage" />

                    <AnimatePresence>
                        {isVisible2 === 4 &&

                            <motion.div
                                className="sliding-div2"
                                initial={{ x: "70%" }}
                                animate={{ x: "80%" }}
                                exit={{ x: "70%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat2 ib">
                                    Brand Strategy/  <br />
                                    Advertising/ Social Media
                                </div>
                                <div className="slidTitle2 ib">
                                   Skyye
                                </div>
                                <div className="slidGen2 ib">
                                    RETAIL
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={() => visible(5)}
                    onMouseLeave={() => nvisible(0)}
                    // onClick={ ()=>  onClicker(4)}
                    >
                    <img src={Duck} alt="Car" className="gridimage" />
                    <AnimatePresence>
                        {isVisible2 === 5 &&

                            <motion.div
                                className="sliding-div"
                                initial={{ x: "-50%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-50%", transition: { duration: 0.3, ease: "easeOut" } }}
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
                <div className="grid-item" onMouseOver={() => visible(6)}
                    onMouseLeave={() => nvisible(0)}
                    // onClick={() => onClicker(3)}
                    >
                    <img src={Water} alt="Car" className="gridimage" />

                    <AnimatePresence>
                        {isVisible2 === 6 &&

                            <motion.div
                                className="sliding-div2"
                                initial={{ x: "70%" }}
                                animate={{ x: "80%" }}
                                exit={{ x: "70%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat2 ib">
                                    What we did
                                </div>
                                <div className="slidTitle2 ib">
                                    Name
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
                            <span onClick={onClose} className="ir cp" style={{
                                fontSize: "2.5vw",
                                marginLeft: "95%",
                                marginTop: "1vw",
                                display: "block",
                                color: "#0017A2"
                            }}>
                                X
                            </span>
                            <div className="flexxx">
                                <div className="flexxTitle ib"

                                >
                                    {SomethingArray[currentInd].title}

                                </div>

                                <div className="flexxDescription ir">
                                    <span className="fd1">
                                        {/* We were tasked with communicating the power of negotiating using the AI <br/> capabilities of the Zlate platform. We did what we do best and took a
                                        contrarian <br/> approach with our tagline, */}
                                       {SomethingArray[currentInd].description}
                                    </span>
                                    {/* <span className="fd2">
                                        ‘Settle for less’
                                    </span> */}
                                </div>

                                <div className="imgColleague">
                                    { 
                                       images[currtitle]?.map((img , index) => {
                                        return <img src={img} alt="Dummy Png" className={`imgColleagueImg${index+1}`} />
                                       })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="klouse">

                        </div>
                    </div>
                }
            </div>

            <MarqueeComponent dir="right" />
            <MarqueeComponent dir="left" />
            <FooterComp />
        </div>
    );
}

export default OurWork



