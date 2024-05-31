import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Common/Header"
import FooterComp from "../Components/Common/Footer";

const AboutUs = () => {

  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const [isVisible , setIsVisible] = useState(0)

  function onHover(index){
    setIsVisible(index)
  }

  function offHover(){
    setIsVisible(0)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (firstDivRef.current) {
        const rect = firstDivRef.current.getBoundingClientRect();
        if (rect.top <= 200) {
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


  return (
    <>
      <Header />
      <div className='aboutUS'>
        <div className="firstdivabu">
          <span className="firstabu ib" ref={firstDivRef} >
          SHAPING THE WAY PEOPLE <br/>
THINK ABOUT YOUR BRAND
          </span>

          <span className="whil" style={{ height: isSecondDivVisible ? "8vw" : "22vw", transition: 'height 1s' }}></span>

          <span className="secondabu ib" style={{ opacity: isSecondDivVisible ? 1 : 0, transition: 'opacity 0.3s' }}>
            We’re not just a team of designers, <br /> strategists, and storytellers— <br />
            We’re Innovators. Dreamers. Creators
          </span>
        </div>

        <div className="seconddivabu"></div>

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

          <span className="fourrabu ib" ref={secondDivRef}>
            Let’s make something  <br />
            amazing together
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