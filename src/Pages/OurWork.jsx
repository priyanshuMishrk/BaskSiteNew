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
import { useLocation } from "react-router";
import LazyLoad from 'react-lazyload';
import MarqueeComponent from "../Components/image-carousel";
import Dummy from "../images/dummy.png"
// import Sheafer1 from "../images/oworl/sheaffer-01-01.jpg"
const Sheafer1 = "https://d1bxlu89wy43u2.cloudfront.net/sheaffer-01-01.jpg"
const Sheafer2 = "https://d1bxlu89wy43u2.cloudfront.net/sheaffer-02-01.jpg"
// import Sheafer2 from "../images/oworl/sheaffer-02-01.jpg"
// import Sheafer3 from "../images/2.png"
const Sheafer3 = "https://d1bxlu89wy43u2.cloudfront.net/2.png"
const Adarsh1 = "https://d1bxlu89wy43u2.cloudfront.net/Adarsh-LF-1.jpg"
const Adarsh2 = "https://d1bxlu89wy43u2.cloudfront.net/Adarsh-LF-2.jpg"
const Adarsh3 = "https://d1bxlu89wy43u2.cloudfront.net/Adarsh-LF-3.jpg"
const pt1 = "https://d1bxlu89wy43u2.cloudfront.net/PT_full page ad_v3-01.jpg"
const pt2 = "https://d1bxlu89wy43u2.cloudfront.net/Presidential Campaign-01.jpg"
const pt3 = "https://d1bxlu89wy43u2.cloudfront.net/Presidential Campaign-07.jpg"
const pt4 = "https://d1bxlu89wy43u2.cloudfront.net/pt.jpg"
const sky1 = "https://d1bxlu89wy43u2.cloudfront.net/skye full page ad-01.jpg"
const sky2 = "https://d1bxlu89wy43u2.cloudfront.net/skye full page ad-02.jpg"
const sky3 = "https://d1bxlu89wy43u2.cloudfront.net/skye full page ad-03.jpg"
const sky4 = "https://d1bxlu89wy43u2.cloudfront.net/OMYB9R1 copy.png"
const Adarsh4 = "https://d1bxlu89wy43u2.cloudfront.net/O7DD5K1 copy.jpg"
const Aukera1 = "https://d1bxlu89wy43u2.cloudfront.net/554 copy 1.png"
const Aukera2 = "https://d1bxlu89wy43u2.cloudfront.net/Print ad_v1-01.jpg"
const Aukera3 = "https://d1bxlu89wy43u2.cloudfront.net/Print ad_v1-02.jpg"
const Aukera4 = "https://d1bxlu89wy43u2.cloudfront.net/Print ad_v1-03.jpg"
const Zlate1 ="https://d1bxlu89wy43u2.cloudfront.net/konferre-01-01.jpg"
const Zlate2 ="https://d1bxlu89wy43u2.cloudfront.net/konferre-01-06.jpg"
const Zlate3 ="https://d1bxlu89wy43u2.cloudfront.net/konferre-01-07.jpg"
const Zlate4 ="https://d1bxlu89wy43u2.cloudfront.net/zate55.png"







// import Adarsh1 from "../images/oworl/Adarsh-LF-1.jpg"
// import Adarsh2 from "../images/oworl/Adarsh-LF-2.jpg"
// import Adarsh3 from "../images/oworl/Adarsh-LF-3.jpg"
// import pt1 from "../images   /oworl/PT_full page ad_v3-01.jpg"
// import pt2 from "../images/oworl/Presidential Campaign-01.jpg"
// import pt3 from "../images/oworl/Presidential Campaign-07.jpg"
// import pt4 from "../images/pt.jpg"
// import sky1 from "../images/oworl/skye full page ad-01.jpg"
// import sky2 from "../images/oworl/skye full page ad-02.jpg"
// import sky3 from "../images/oworl/skye full page ad-03.jpg"
// import sky4 from "../images/BWW/OMYB9R1 copy.png"
// import Adarsh4 from "../images/BWW/O7DD5K1 copy.jpg"
// import Aukera1 from "../images/BWW/554 copy 1.png"
// import Aukera2 from "../images/oworl/Print ad_v1-01.jpg"
// import Aukera3 from "../images/oworl/Print ad_v1-02.jpg"
// import Aukera4 from "../images/oworl/Print ad_v1-03.jpg"
// import Zlate1 from "../images/oworl/konferre-01-01.jpg"
// import Zlate2 from "../images/oworl/konferre-01-06.jpg"
// import Zlate3 from "../images/oworl/konferre-01-07.jpg"
// import Zlate4 from "../images/BWW/zate55.png"

const OurWork = () => {

    const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(0);
    const [currtitle, setCurr] = useState("")
    const SomethingArray = [
        {
            title: "Sheaffer",
            description: "A clear choice of leaders, Sheaffer's campaign was built around crafting something of value- not simply in the quality of the product but also the magnitude of the moments it bears witness to. The campaign was made for the true consumers of the brand as much as it was a tribute to the history of the brand itself."
        },
        {
            title: "Adarsh",
            description: "When working on a brief from a builder as native to the Bangalore skyline as Adarsh is, the communication goes a step beyond what is asked. The campaign was written to convey a very abused word in the real estate industry, tranquility, without ever saying it. It's necessary to remain sincere when you are writing for an audience that is intelligent, and that's what we did."
        },
        {
            title: "Presidential towers",
            description: "In the luxury segment of serious real estate investment, we believe the only thing that works is direct communication with your consumer, while understanding their expectations and demands from a home that go beyond than just shelter and convenience."
        },
        {
            title: "Skyye",
            description: "A world bar, in a world city- Skyye is pure indulgence. Apart from the address, there's hardly anything about Skyye that ties it to any one place, or culture. The campaign was built on the foundation of this very insight of how the customer feels when in Skyye. A part of the world, somewhere in Bangalore."
        },
        {
            title : "Aukera",
            description : "Aukera has been about women choosing their own path. The campaigns were built around celebrating women who break the slots society tries to jam them into, and reach for the brilliance they deserve."
        },
        {
            title : "Zlate",
            description : `We were tasked with communicating the power of negotiating using the AI capabilities of the Zlate platform. We did what we do best and took a 
            contrarian approach with our tagline, 'Settle for less'`
        }
    ]
    const images = {
        Sheaffer: [Sheafer1, Sheafer2],
        Adarsh: [Adarsh1, Adarsh2, Adarsh3],
        "Presidential towers": [pt3, pt2, pt1],
        Skyye: [sky1, sky2, sky3],
        Aukera: [Aukera2, Aukera3, Aukera4],
        Zlate : [Zlate1 , Zlate2 , Zlate3]

    }


    function visible(i) {
        setIsVisible2(i)
    }

    function nvisible(i) {
        setIsVisible2(i)
    }

    useEffect(() => {
        setIsVisible(true); 
    }, []);

    const [isVisible3, setisVisible3] = useState(false)
    const [currentInd, setCurentInd] = useState(0)

    const [imageeee , setImage] = useState([])
    function onClicker(i = 0) {
        setCurentInd(i)
        setisVisible3(true) 
        setCurr(SomethingArray[i].title)
    }

    function onClose() {
        setisVisible3(false)
    }

    const [visibleWords, setVisibleWords] = useState([]);

    useEffect(() => {
        const words = document.querySelectorAll('.firstWorkDiv .word');
        let delay = 1000; // Initial delay for the first word
        words.forEach((word, index) => {
            setTimeout(() => {
                setVisibleWords(prevState => [...prevState, index]);
            }, delay + index * 50); // Each subsequent word appears after 0.5 seconds
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        console.log(imageeee)
        console.log(index)
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const off = () => {
        setIsOpen(false)
    }


    return (
        <div className="p-0 m-0 mainpage">
            {<Header />}

            <div className="firstWorkDiv">
                <video autoPlay muted loop className="video-background">
                    <source src="https://d1bxlu89wy43u2.cloudfront.net/vid2+(1).mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <iframe width="1280" height="720" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cZ1fqsVNDfd?controls=1&share=1&download=1&embed=1&cl=1&width=1280&height=720&overlays=1&ff=1" allowfullscreen="true"></iframe> */}

                <div style={{
                    width: "100%"
                }} className="ib okokokoo">
                    <div className="line">
                        <span className={visibleWords.includes(0) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(1) ? "word visible" : "word"} >good.</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(2) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(3) ? "word visible" : "word"} >ok.</span>
                    </div>
                    <div className="line">
                        <span className={visibleWords.includes(4) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(5) ? "word visible" : "word"} >nice.</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(6) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(7) ? "word visible" : "word"} >better.</span>
                    </div>
                    <div className="line">
                        <span className={visibleWords.includes(8) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(9) ? "word visible" : "word"} >left.</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(10) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(11) ? "word visible" : "word"} >right.</span>
                    </div>
                    <div className="line">
                        <span className={visibleWords.includes(12) ? "word visible" : "word"} >Some</span>
                    <span className="space"> </span>
                        <span className={visibleWords.includes(13) ? "word visible" : "word"} >square.</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(14) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(15) ? "word visible" : "word"} >centered.</span>
                        <span className="space"> </span>
                        
                    </div>
                    <div className="line">
                    <span className={visibleWords.includes(16) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(17) ? "word visible" : "word"} >social.</span>
                        <span className="space"></span>
                        <span className={visibleWords.includes(18) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(19) ? "word visible" : "word"} >print.</span>
                    </div>
                    <div className="line">
                        <span className={visibleWords.includes(20) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(21) ? "word visible" : "word"} >old.</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(22) ? "word visible" : "word"} >Some</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(23) ? "word visible" : "word"} >new.</span>
                    <span className="space"> </span>
                        <span className={visibleWords.includes(24) ? "word visible" : "word"} >All</span>
                        <span className="space"> </span>
                        <span className={visibleWords.includes(25) ? "word visible" : "word"} >Ours</span>
                    </div>
                    <div className="theWorker ibl">
                        <div >
                            The Work
                        </div>
                        <div
                            className={visibleWords.includes(18) ? "theWorkerMagic jackalsaidheisokay" : "theWorkerMagic"}
                        ></div>

                    </div>
                </div>


            </div>








            <div className={`grid-container`} id="workGrid">
                <div className="grid-item" onMouseOver={() => visible(1)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={() => onClicker(0)}
                >
                    <img src={Sheafer3} alt="Car" className="gridimage Sheafer3" loading="lazy"/>
                    <AnimatePresence>
                        {isVisible2 === 1 &&

                            <motion.div
                                className="sliding-div"
                                initial={{ x: "-90%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-90%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat ir">
                                    Print
                                </div>
                                <div className="slidDescr">
                                    <div className="slidTitle er">
                                        Sheaffer
                                    </div>
                                    <div className="slidGen ir">
                                        Product
                                    </div>
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>

                <div className="grid-item" onMouseOver={() => visible(2)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={() => onClicker(1)}

                >
                    <img src={Adarsh4} alt="Car" className="gridimage" loading="lazy"/>

                    <AnimatePresence>
                        {isVisible2 === 2 &&

                            <motion.div
                                className="sliding-div2"
                                initial={{ x: "180%" }}
                                animate={{ x: "75%" }}
                                exit={{ x: "180%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat2 ir">
                                Strategy/ print

                                </div>
                                <div className="slidDescr">
                                <div className="slidTitle2 er">
                                    Adarsh
                                </div>
                                <div className="slidGen2 ir">
                                    Real Estate
                                </div>

                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={() => visible(3)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={() => onClicker(2)}
                >
                    <img src={pt4} alt="Car" className="gridimage" loading="lazy" />
                    <AnimatePresence>
                        {isVisible2 === 3 &&

                            <motion.div
                                className="sliding-div"
                                initial={{ x: "-90%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-90%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat ir">
                                Print/Digital
                                </div>
                                <div className="slidDescr">
                                    <div className="slidTitle er">
                                    Presidential Towers
                                    </div>
                                    <div className="slidGen ir">
                                    Real Estate
                                    </div>
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={() => visible(4)}
                    onMouseLeave={() => nvisible(0)}
                    onClick={() => onClicker(3)}
                >
                    <img src={sky4} alt="Car" className="gridimage" loading="lazy"/>

                    <AnimatePresence>
                        {isVisible2 === 4 &&

                            <motion.div
                            className="sliding-div2"
                            initial={{ x: "180%" }}
                            animate={{ x: "80%" }}
                            exit={{ x: "180%", transition: { duration: 0.3, ease: "easeOut" } }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat2 ir">
                                    Brand Strategy/  <br />
                                    Advertising/ Social Media
                                </div>
                                <div className="slidDescr">
                                <div className="slidTitle2 er">
                                    Skyye
                                </div>
                                <div className="slidGen2 ir">
                                    RETAIL
                                </div>

                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={() => visible(5)}
                    onMouseLeave={() => nvisible(0) 
                    }
                onClick={ ()=>  onClicker(4)}
                >
                    <img src={Aukera1} alt="Car" className="gridimage" loading="lazy"/>
                    <AnimatePresence>
                        {isVisible2 === 5 &&

                            <motion.div
                                className="sliding-div"
                                initial={{ x: "-90%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-90%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >

                                <div className="slidCat ir">
                                Strategy/ Print/ Digital
                                </div>
                                <div className="slidDescr">
                                    <div className="slidTitle er">
                                    Aukera
                                    </div>
                                    <div className="slidGen ir">
                                    Jewellery
                                    </div>
                                </div>
                            </motion.div>

                        }
                    </AnimatePresence>
                </div>
                <div className="grid-item" onMouseOver={() => visible(6)}
                    onMouseLeave={() => nvisible(0)}
                onClick={() => onClicker(5)}
                >
                    <img src={Zlate4} alt="Car" className="gridimage" loading="lazy"/>

                    <AnimatePresence>
                        {isVisible2 === 6 &&

                            <motion.div
                                className="sliding-div2"
                                initial={{ x: "180%" }}
                                animate={{ x: "80%" }}
                                exit={{ x: "180%", transition: { duration: 0.3, ease: "easeOut" } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="slidCat2 ir">
                                Strategy/ Print/ Design
                                </div>
                                <div className="slidDescr">
                                <div className="slidTitle2 er">
                                    ZLATE
                                </div>
                                <div className="slidGen2 ir">
                                Product
                                </div>

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
                                        images[currtitle]?.map((img, index) => {
                                            return <img src={img} alt="Dummy Png"   className={`imgColleagueImg${index + 1} cp` }  onClick={() => openLightbox(index)} />
                                        })
                                    }
                                   
                                </div>
                            </div>
                        </div>
                        <div className="klouse cp" onClick={onClose}>

                        </div>
                    </div>
                }
            </div>

            <MarqueeComponent dir="right" />
            <MarqueeComponent dir="left" />
            {isOpen && (
        <div className="imagePreview">
            <img src={images[currtitle][photoIndex]} alt="" />
                <div className="ib cp" onClick={off}>X</div>
        </div>
      )}
            <FooterComp />
        </div>
    );
}

export default OurWork



