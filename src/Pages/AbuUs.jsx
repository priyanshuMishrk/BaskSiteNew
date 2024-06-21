import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Common/Header"
import FooterComp from "../Components/Common/Footer";
import "./style2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vidd from "../Vids/somevid1.mp4"
import imi from "../images/Logo/jollykollymolly.png"
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router";
import LazyLoad from 'react-lazyload';

const AboutUs = () => {

  function goToLink(link){
    window.open(link, "_blank" )
  }

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

  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const [isVisible, setIsVisible] = useState(0)
  const [isVisibles, setIsVisibles] = useState(0)

  const allDet = [
    {
      title: "Strategy",
      content: "We craft compelling brand narratives that resonate deeply with your audience. By leveraging data-driven insights to craft strategies that amplify your brand’s unique voice; Fostering consistent and memorable brand experiences across all channels."
    },
    {
      title: "Digital",
      content: "We do Websites, social media, Performance Marketing, App Design, SEO, Native Advertising and everything else digital."
    },
    {
      title: "Design",
      content: "We specialize in communication design that effectively conveys your brand’s message across various platforms."
    },
    {
      title: "Photography & Film",
      content: "From Styling, to shooting, from F&B to Fashion , we got you covered. We also make compelling films, from conceptualization to post-production, we handle every aspect of film production."
    },
    {
      title: "Social media",
      content: "Social Media Strategy, Content Creation, Influencer Marketing, Community Management, Brand Storytelling, Visual Content Production, Platform Management, Social Listening are few of the tools in our arsenal."
    },
    {
      title: "Brand Identity",
      content: "The face of every brand is its identity. We dress up brands with great logo design, graphics, packaging and experience design that tell the world the values they stand for."
    },
    {
      title: "Advertising",
      content: "We create advertising campaigns that unite a brand and give it a unique position. We do brand campaigns in print, tv, radio, films and the digital medium."
    },
    {
      title: "Tech",
      content: "We develop apps and find tech solutions for brand marketing problems. And our tech team also dabbles in AI to find applications in marketing and branding."
    },
    {
      title: "Brand Factory",
      content: "We also create our own brands. We come up with ideas, find the right partners and help them run it. We have few of them in the kiln. And if you are an investor and like to partner with us in creating your own brands, give us a call."
    }
  ];

  const [jaggu , setJaggu] = useState(false)

  function onHover(index) {
    if(dimensions.width<600){
      console.log(index)
      setIsVisibles(index-1)
      setJaggu(!jaggu)
    }else{
      setIsVisible(index)
    }
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
  const [jakee, setJakee] = useState(false)

  useEffect(() => {
    const words = document.querySelectorAll('.firstabu .word');
    let delay = 1000; // Initial delay for the first word
    words.forEach((word, index) => {
      setTimeout(() => {
        setVisibleWords(prevState => [...prevState, index]);
      }, delay + index * 100); // Each subsequent word appears after 0.5 seconds
    });
  }, []);

  const [opc, setOpc] = useState(0)

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
    if (isInView2) {
      setOpc(1)
    } else {
      setOpc(0)
    }
  }, [isInView2])



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

  useEffect(() => {
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 1) {
      setCI(1);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 2) {
      setCI(2);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 3) {
      setCI(3);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 4) {
      setCI(4);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 5) {
      setCI(5);
    }
    if (Math.floor((scrollY2 - startingScrollY) / incrementThreshold) === 6) {
      setCI(6);
    }
  }, [scrollY2]);




  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200, // Adjust as needed
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, // Adjust as needed
        behavior: 'smooth'
      });
    }
  };

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




  return (
    <>
      <Header />
      <div className='aboutUS'

      >
        <div className="firstdivabu">
          <LazyLoad className="w-100">
          <video autoPlay muted loop className="video-background">
            <source src="https://d1bxlu89wy43u2.cloudfront.net/3051357-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          </LazyLoad>


          

          <span className="firstabu ib" >
            <div className="line">
              <span className={visibleWords.includes(0) ? "word visible" : "word"} >Breaking</span>
              <span className="space"> </span>
              <span className={visibleWords.includes(1) ? "word visible" : "word"} >Walls.</span>
            </div>
            <div className="line">
              <span className={visibleWords.includes(2) ? "word visible" : "word"} >Building</span>
              <span className="space"> </span>
              <span className={visibleWords.includes(3) ? "word visible" : "word"} >Brands.</span>
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


        {
            jaggu && isVisibles !== 0 && (
              <div className="wiebrr">
                <div className="content" style={
                  {
                    backgroundColor : `${isVisibles % 2 === 0 ? "#fff" : "#FFD900"}`
                  }
                }>
                  <div className="titllle ei">
                    {allDet[isVisibles].title}
                  </div>
                  <div className="desccc im">
                    {allDet[isVisible].content}
                  </div>
                </div>
                <div className="wiebrr34" onClick={() => onHover(0)}>

                </div>
              </div>
            )
          }


        <div className="motherAbu">
          <div className="flexyAbu">
            <div className="flexyAbu1 ib" ref={firstDivRef}>
              {/* Brands are alive in the realm of imagination. <br />
              Yet, they are more real than real things.<br />
              They help you dream a life. Make you aspire <br />   to, and add meaning to your existence. */}
              We are a creative led, teach intensive ,<br/> idea centric brand and communication <br/>agency.
            </div>
            {/* <div className={`rightlinebb ${isSecondDivVisible ? "ohooooheight" : ""}`}></div>
            <div className={`leftlinebb ${isSecondDivVisible ? "ohooooheight" : ""}`}></div> */}
            <div className={`abu9 ${isSecondDivVisible ? "klbtko" : ""}`} >
            </div>
            <div className="flexyAbu2 ib">
              Brands love you as much as you love <br /> them. And with the right brands, you <br /> create a lifelong relationship.
            </div>
          </div>
        </div>

        


        <div className="fivedivabu">

<span className="fifTitle ib">
  Who We Are ?
</span>
<div style={{
  position: "relative"
}}>
  <div className="fifff" ref={scrollRef}>
    <div className="yeboo cp" onClick={() => goToLink("https://www.linkedin.com/in/sampath-kumar-69069b/")}>

      <div className="name ibl">Sampath Kumar</div>
      <div className="desig sb">Founder & CEO</div>
    </div>
    <div className="weboo cp" onClick={() => goToLink("https://www.linkedin.com/in/c-p-prabhakaran-549ab720/")}>
      <div className="name ibl">C.P.Prabhakar</div>
      <div className="desig sb">Director-Business</div>

    </div>
    <div className="yeboo cp" onClick={() => goToLink("https://www.linkedin.com/in/suresh-manian-804504/")}>

      <div className="name ibl">Suresh Manian</div>
      <div className="desig sb">Executive Creative Director</div>
    </div>
    <div className="weboo cp" onClick={() => goToLink("https://www.linkedin.com/in/sonicasingh/")} >
      <div className="name ibl">Sonica Singh</div>
      <div className="desig sb">Head of Digital</div>
    </div>
    <div className="yeboo cp" onClick={() => goToLink("https://www.linkedin.com/in/etput")} >
      <div className="name ibl">Preet </div>
      <div className="desig sb">Senior Account Manager </div>
    </div>
    <div className="weboo cp" onClick={() => goToLink("https://www.linkedin.com/in/gowri-subramoniam-895498a7")} >
      <div className="name ibl">Gowri Subramoniam</div>
      <div className="desig sb">Head - Digital Content</div>
    </div>

    <div className="yeboo cp" onClick={() => goToLink("https://www.linkedin.com/in/priyanshu-mishra-baskdev/")} >
      <div className="name ibl">Priyanshu Mishra</div>
      <div className="desig sb">Senior Software Dev</div>
    </div>

    <div className="weboo cp" onClick={()=> goToLink("https://www.linkedin.com/in/sasibhaskar/")} >
      <div className="name ibl">Sasi</div>
      <div className="desig sb">
      Creative Director (Art)
      </div>
    </div>
    <FontAwesomeIcon icon={faChevronLeft} className="abu-scroll-left" onClick={scrollLeft} />
    <FontAwesomeIcon icon={faChevronRight} className="abu-scroll-right" onClick={scrollRight} />
  </div>

</div>

</div>

<span className="thridLineWy" style={{ height: isDivVisible ? "12vw" : "26vw", transition: 'height 1s', marginBottom : "6vw" }}>

</span>

        {/* <div className="seconddivabu"></div> */}

        <span className="fifTitle ib mb-5">
  What We Do ?
</span>
        <div className="thirddivabu" id="thirddivabu">

          <div className="wabu" onMouseEnter={() => onHover(1)} onMouseLeave={offHover}>
            <span className="title ei">
              Strategy
            </span>
            {
              isVisible === 1 &&
              <p className="wabup im">
                {/* We craft compelling brand narratives that resonate deeply with your audience. By leverage data-driven insights to craft strategies that amplify your brand’s unique voice; Fostering consistent and memorable brand experiences across all channels. */}
                Communication strategy that creates strong insight driven brands.
              </p>
            }

          </div>

          <div className="yabu" onMouseEnter={() => onHover(2)} onMouseLeave={offHover}>
            <span className="title ei">
              {/* Digital */}
              Creative
            </span>
            {
              isVisible === 2 &&
              <p className="yabup im">

                {/* We do Websites, social media, Performance Marketing, App Design, SEO, Native Advertising and everything else digital. */}
                Memorable, fresh and idea driven advertising campaigns. 
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
                {/* We specialize in communication design that effectively conveys your brand’s message across various platforms. */}
                Graphic design to brand identity creation and packaging. we evolve the design language that  reflect the times and combines the brand’s ethos.
              </p>
            }


          </div>

          <div className="yabu" onMouseEnter={() => onHover(4)} onMouseLeave={offHover}>
            <span className="title ei">
              {/* Photography & Film */}
              Digital
            </span>

            {
              isVisible === 4 &&
              <p className="yabup im">
                {/* From Styling, to shooting, from F&B to Fashion , we got you covered. We also make  compelling films, from conceptualization to post-production, we handle every aspect of film production. */}
                Websites, Social media, Performance marketing, App design, SEO, Native advertising, and everything else digital. our strengths in digital lie in our understanding of UI/UX. currently involved in creating a large in-house e-commerce project.

              </p>
            }


          </div>

          <div className="wabu" onMouseEnter={() => onHover(5)} onMouseLeave={offHover}>
            <span className="title ei">
              {/* Social media */}
              Experience Design
            </span>

            {
              isVisible === 5 &&
              <p className="wabup im">
                {/* Social Media Strategy, Content Creation,Influencer Marketing, Community Management, Brand Storytelling,
                Visual Content Production, Platform Management, Social Listening  are few of the tools in our arsenal */}
              
              Designing spaces that  take the brand personality and turn it to a physical experience. stores, showrooms and experience centres.

              </p>
            }


          </div>

          <div className="yabu" onMouseEnter={() => onHover(6)} onMouseLeave={offHover}>
            <span className="title ei">
              {/* Brand Identity */}

              Production
            </span>

            {
              isVisible === 6 &&
              <p className="yabup im">
                {/* The face of every brand is its identity. We dress up brands with great logo design, graphics, packaging and experience design that tell the world the values they stand for. */}
              
                From idea to execution our production team manages production of still shoots to films.              
              </p>
            }


          </div>

          {/* <div className="wabu" onMouseEnter={() => onHover(7)} onMouseLeave={offHover}>
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


          </div> */}



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

        <div className="thebanneranim mb-5">
          <span className={`tba1 ib jakeisfron${currentIndex}`}>
            At Bask, we help brands add <br /> value through ideas, design and <br />imaginative narratives.
          </span>
          <span className={`tba2 ibl jakeisback${currentIndex}`}>Let’s make something  <br />
            amazing together</span>

          <span className="tba3" ref={containerRef3}>

          </span>
        </div>

        





      </div>
      <FooterComp />

    </>
  );
};

export default AboutUs;