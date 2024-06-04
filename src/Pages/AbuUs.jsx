import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Common/Header"
import FooterComp from "../Components/Common/Footer";
import "./style2.css"
import vidd from "../Vids/somevid1.mp4"
import imi from "../images/Logo/jollykollymolly.png"

const AboutUs = () => {

  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const [isVisible, setIsVisible] = useState(0)

  function onHover(index) {
    setIsVisible(index)
  }

  function offHover() {
    setIsVisible(0)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (firstDivRef.current) {
        const rect = firstDivRef.current.getBoundingClientRect();
        if (rect.top <= 180) {
          setIsSecondDivVisible(true);
        } else {
          setIsSecondDivVisible(false);
        }
      }

      if (secondDivRef.current) {
        const rect = secondDivRef.current.getBoundingClientRect();
        if (rect.top <= 100) {
          setIsDivVisible(true);
        } else {
          setIsDivVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  const [scrollY, setScrollY] = useState(0);
  
  const [isInView2, setIsInView2] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (isInView2) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView2]);

  const maxTranslate = 100; // Maximum translateX value
  const translationFactor = 0.5; // Adjust to control the speed of translation

  const leftTranslate = Math.min(scrollY * translationFactor / 10, maxTranslate);
  const rightTranslate = Math.min(scrollY * translationFactor / 10, maxTranslate);



  const [visibleWords, setVisibleWords] = useState([]);
  const [jakee , setJakee] = useState(false)

  useEffect(() => {
    const words = document.querySelectorAll('.firstabu .word');
    let delay = 1000; // Initial delay for the first word
    words.forEach((word, index) => {
      setTimeout(() => {
        setVisibleWords(prevState => [...prevState, index]);
      }, delay + index * 500); // Each subsequent word appears after 0.5 seconds
    });
  }, []);

  const [opc , setOpc] = useState(0)

  const containerRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView2(entry.isIntersecting);
      },
      {
        threshold: 1, // Adjust this value as needed
      }
    );

    if (containerRef2.current) {
      observer.observe(containerRef2.current);
    }

    return () => {
      if (containerRef2.current) {
        observer.unobserve(containerRef2.current);
      }
    };
  }, [containerRef2]);

  useEffect(() => {
    if (isInView2){
      setOpc(1)
    }else {
      setOpc(0)
    }
  },[isInView2])



  const [currentIndex, setCI] = useState(1)

  const containerRef3 = useRef(null);
  const [isInView3, setIsInView3] = useState(false);

  const [scrollY2, setScrollY2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isInView3) {
        setScrollY2(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView3]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView3(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (containerRef3.current) {
      observer.observe(containerRef3.current);
    }

    return () => {
      if (containerRef3.current) {
        observer.unobserve(containerRef3.current);
      }
    };
  }, [containerRef3]);
  const incrementThreshold = 193;
  const startingScrollY = 2319;
  console.log(Math.floor((scrollY2 - startingScrollY) / incrementThreshold), "dddddddd")

  useEffect(() => {
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 1 ) { 
      setCI(1);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 2 ) { 
      setCI(2);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 3 ) { 
      setCI(3);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 4 ) { 
      setCI(4);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 5 ) { 
      setCI(5);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 6 ) { 
      setCI(6);
    }
  }, [scrollY2]);



  return (
    <>
      <Header />
      <div className='aboutUS'
        
      >
        <div className="firstdivabu">
          <video autoPlay muted loop className="video-background">
            <source src="https://res.cloudinary.com/dcutzde3o/video/upload/v1717533366/somevid1_b7djlr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          <span className="firstabu ib" >
          <div className="line">
        <span className={visibleWords.includes(0) ? "word visible" : "word"} >SHAPING</span>
        <span className="space"> </span>
        <span className={visibleWords.includes(1) ? "word visible" : "word"} >THE</span>
        <span className="space"> </span>
        <span className={visibleWords.includes(2) ? "word visible" : "word"} >WAY</span>
        <span className="space"> </span>
        <span className={visibleWords.includes(3) ? "word visible" : "word"} >PEOPLE</span>
          </div>
          <div className="line">
        <span className={visibleWords.includes(4) ? "word visible" : "word"} >THINK</span>
        <span className="space"> </span>
        <span className={visibleWords.includes(5) ? "word visible" : "word"} >ABOUT</span>
        <span className="space"> </span>
        <span className={visibleWords.includes(6) ? "word visible" : "word"} >BRANDS</span>
          </div>
          </span>
          
          {/* <span className="whil" style={{ height: isSecondDivVisible ? "8vw" : "22vw", transition: 'height 1s' }}></span>

          <span className="secondabu ib" style={{ opacity: isSecondDivVisible ? 1 : 0, transition: 'opacity 0.3s' , width:"70%"}}>
            {/* We’re not just a team of designers, <br /> strategists, and storytellers— <br />
            We’re Innovators. Dreamers. Creators */}
          {/* Brands are alive in the realm of imagination. Yet, they are more real than real things. They help you dream a life. Make you aspire to, and add meaning to your existence. Brands love you as much as you love them. And with the right brands, you create a lifelong relationship.
          </span>  */}
        </div>

        <span className="viewer">

          </span>

        <div className="motherAbu">
          <div className="flexyAbu">
            <div className="flexyAbu1 ib" ref={firstDivRef}>
            Brands are alive in the realm of imagination. <br/> 
Yet, they are more real than real things.<br/>
 They help you dream a life. Make you aspire <br/>   to, and add meaning to your existence. 
            </div>
            <div className={`rightlinebb ${isSecondDivVisible ? "ohooooheight" : ""}`}></div>
            <div className={`leftlinebb ${isSecondDivVisible ? "ohooooheight" : ""}`}></div>
            <div className={`abu9 ${isSecondDivVisible ? "klbtko" : ""}`} >
            </div>
            <div className="flexyAbu2 ib">
            Brands love you as much as you love <br/> them. And with the right brands, you <br/> create a lifelong relationship.
            </div>
          </div>
        </div>






        {/* <div className="seconddivabu"></div> */}

        <div className="thirddivabu">

          <div className="wabu" onMouseEnter={() => onHover(1)} onMouseLeave={offHover}>
            <span className="title ei">
              Strategy
            </span>
            {
              isVisible === 1 &&
              <p className="wabup im">
                We craft compelling brand narratives that resonate deeply with your audience. By leverage data-driven insights to craft strategies that amplify your brand’s unique voice; Fostering consistent and memorable brand experiences across all channels.
              </p>
            }

          </div>

          <div className="yabu" onMouseEnter={() => onHover(2)} onMouseLeave={offHover}>
            <span className="title ei">
              Digital
            </span>
            {
              isVisible === 2 &&
              <p className="yabup im">

                We do Websites, social media, Performance Marketing, App Design, SEO, Native Advertising and everything else digital.
              </p>
            }

          </div>

          <div className="wabu" onMouseEnter={() => onHover(3)} onMouseLeave={offHover}>
            <span className="title ei">
              Design
            </span>

            {
              isVisible === 3 &&
              <p className="wabup im">
                We specialize in communication design that effectively conveys your brand’s message across various platforms.
              </p>
            }


          </div>

          <div className="yabu" onMouseEnter={() => onHover(4)} onMouseLeave={offHover}>
            <span className="title ei">
              Photography & Film
            </span>

            {
              isVisible === 4 &&
              <p className="yabup im">
                From Styling, to shooting, from F&B to Fashion , we got you covered. We also make  compelling films, from conceptualization to post-production, we handle every aspect of film production.
              </p>
            }


          </div>

          <div className="wabu" onMouseEnter={() => onHover(5)} onMouseLeave={offHover}>
            <span className="title ei">
              Social media
            </span>

            {
              isVisible === 5 &&
              <p className="wabup im">
                Social Media Strategy, Content Creation,Influencer Marketing, Community Management, Brand Storytelling,
                Visual Content Production, Platform Management, Social Listening  are few of the tools in our arsenal
              </p>
            }


          </div>

          <div className="yabu" onMouseEnter={() => onHover(6)} onMouseLeave={offHover}>
            <span className="title ei">
              Brand Identity
            </span>

            {
              isVisible === 6 &&
              <p className="yabup im">
                The face of every brand is its identity. We dress up brands with great logo design, graphics, packaging and experience design that tell the world the values they stand for.
              </p>
            }


          </div>

          <div className="wabu" onMouseEnter={() => onHover(7)} onMouseLeave={offHover}>
            <span className="title ei">
              Advertising
            </span>

            {
              isVisible === 7 &&
              <p className="wabup im">
                We create advertising campaigns that ,
                unite a brand and give it a unique position.
                We do brand campaigns in print, tv, radio, films and
                the digital medium.
              </p>
            }


          </div>

          <div className="yabu" onMouseEnter={() => onHover(8)} onMouseLeave={offHover}>
            <span className="title ei">
              Tech
            </span>

            {
              isVisible === 8 &&
              <p className="yabup im">
                We develop apps and find tech solutions
                for brand marketing problems. And our tech team
                also dabbles in AI to find applications in marketing and branding.
              </p>
            }


          </div>

          <div className="wabu" onMouseEnter={() => onHover(9)} onMouseLeave={offHover}>
            <span className="title ei">
              Brand Factory
            </span>

            {
              isVisible === 9 &&
              <p className="wabup im">
                We also create our own brands. We come
                up with ideas, find the right partners and  help them run it. We have few of them in the kiln. And if you are an investor and like to partner with us in creating your own brands, give us a call.
              </p>
            }


          </div>



        </div>

        <div className="fourthdivabu">
          {/* <span className="fourrrabu ib">
            So, whether you're a brand <br />
            looking to disrupt the market, <br />
            a startup ready to make waves,or <br />
            a company seeking a fresh perspective,<br />
            you’ve come to the right place. .
          </span> */}

          <span className="linebw">

          </span>
        </div>

        <div className="thebanneranim">
        <span className={`tba1 ib jakeisfron${currentIndex}`}>
          At Bask, we help brands add <br/> value through ideas, design and <br/>imaginative narratives
          </span>
          <span className={`tba2 ibl jakeisback${currentIndex}`}>Let’s make something  <br/>
amazing together</span>

        <span className="tba3" ref={containerRef3}>

        </span>
        </div>

        <span className="thridLineWy" style={{ height: isDivVisible ? "8vw" : "22vw", transition: 'height 1s' }}>

        </span>


        <div className="fivedivabu">

          <span className="fifTitle ib">
            THE A-TEAM
          </span>

          <div className="fifff">
            <div className="yeboo"></div>
            <div className="weboo"></div>
            <div className="yeboo"></div>
            <div className="weboo"></div>
            <div className="yeboo"></div>
            <div className="weboo"></div>
          </div>

        </div>


      </div>
      <FooterComp />

    </>
  );
};

export default AboutUs;