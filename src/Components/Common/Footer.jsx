// import { useEffect, useState } from 'react';
import fbLogo from "../../Icons/fb 2 1.svg";
import instaLogo from "../../Icons/insta.svg";
import LinkedinLogo from "../../Icons/l.svg";
import Logo from "../../Icons/Logo/Bask Logo-03 1.png";
import Logo3 from "../../images/Logo/BaskLogo.png"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from "react-router";
import useIntersectionObserver from "./Observer";
import ReactCardFlip from 'react-card-flip';
import Foto from '../../images/postcard.png';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import { debounce } from 'lodash';



function FooterComp() {
  const navigate = useNavigate();
  const [homePage, setHomePage] = useState(false)
  const [ourWork, setOurwork] = useState(false)
  const [aboutUs, setAbout] = useState(false)
  function lodo() {
    navigate("/")
  }

  function nodo() {
    navigate("/about")
  }

  const footerRef = useRef(null);

  const controls = useAnimation();
  const [scrollDistance, setScrollDistance] = useState(0);
  const [d, setD] = useState(true);
  const [jo, setJo] = useState(false)
  const location = useLocation();
  const [mtt, setMtt] = useState(0)
  const [initialH, setIh] = useState(191)
  const [flipper, setFlipper] = useState(false)

  function cardClick(bool) {
    setFlipper(bool)
  }

  useEffect(() => {
    const current = location.pathname
    if (current === "/") {
      setHomePage(true)
    }

    if (current === "/about") {
      setAbout(true)
    }

    if (current === "/work") {
      setOurwork(true)
    }


    if (current === "/") {
      setJo(true)

    }
    const handleScroll = 
    debounce (
      () => {
        if (footerRef.current) {
          const footerRect = footerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
  
          if (footerRect.top < windowHeight) {
            const maxScroll = 300; // Maximum scroll distance after reaching the footer for maximum height increase
            const distance = Math.min(windowHeight - footerRect.top, maxScroll);
            setScrollDistance(distance);
          } else {
            setScrollDistance(0);
          }
        }
      }, 50)

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const maxIncrease = 300; // Maximum height increase (in pixels)
    const initialHeight = 150;
    const newHeight = 150 + (scrollDistance / 300) * maxIncrease;
    if (newHeight < initialHeight + maxIncrease - 10 && d) {
      controls.start({ height: newHeight });
      const cmt = newHeight - initialHeight
      console.log(cmt)
      // console.log(initialH)
      // setIh(initialH + cmt)
      // console.log(initialH)
    } else {
      const cmt = newHeight - initialHeight
      controls.start({ height: initialHeight });
      setD(false)
      setMtt(cmt)
    }
  }, [scrollDistance, controls]);





  const [isVisible, setIsVisible] = useState(false);

  function contactUsClick(bool) {
    setIsVisible(bool)
  }

  const handleIntersection = (entry) => {
    // setD(!entry.isIntersecting);
    if (entry.isIntersecting === false) {
      setMtt(0)
      setD(true)
      setIh(196)
    }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    const defaultEmailId = 'info@blackis.in';
    const subject = 'Inquiry';
    e.preventDefault();
    if (!name) {
      const msg = "Please enter your name";
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (!email) {
      const msg = "Please enter your email";
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (!message) {
      const msg = "Please enter your message";
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    // const mailto = `mailto:${defaultEmailId}?subject=${subject}&body=Hey ${name},%0D%0A%0D%0A ${message}.`;
    // window.location = mailto;
    // const mailto = `${baseGmailUrl}${defaultEmailId}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hey ${name},\n\n${message}`)}`;
    const formData = {
      Name : name,
      Email : email,
      Message : message
    }
    try {
      const response = await fetch('https://submit-form.com/asUSjFAHD', {
          method: 'POST',
          body: formData,
      });
      console.log(response)
      if (response.ok) {
          // Handle successful submission
      } else {
          // Handle error
      }
  } catch (error) {
      // Handle network error
  }
  };

  const handleMessageChange = (e) => {
    const prefix = 'I am writing this message to';
    const newMessage = e.target.value.startsWith(prefix) ? e.target.value : prefix + e.target.value;
    setMessage(newMessage);
  };

  const elementRef = useIntersectionObserver(handleIntersection, { threshold: 0.1 });;
  return (
    <>
      {isVisible &&
        <div className="jkjkjkjkjkjk">

          <div style={{
            zIndex: "9999",
            position: "fixed",
            top: "25%",
            left: "20%"
          }}>

            <ReactCardFlip
              isFlipped={flipper}
              flipDirection="horizontal"
            >
              <div className="frontFoot"
                style={{
                  width: "60vw",
                  height: "60vh",
                  display: "flex",
                  backgroundColor: "#F7F2E9",
                }}
                onClick={() => cardClick(true)}
              >
                <div
                  style={{
                    width: "50%",
                    borderRight: '2px solid black',
                    height: "80%",
                    marginTop: "3vw"
                  }}
                >
                  <span className="lpr"
                    style={{
                      paddingTop: "0vw",
                      fontSize: "1vw",
                      paddingLeft: "3vw",
                    }}
                  >

                    <span style={{
                      transform: " translateX(0%) translateY(-200%) rotate(-22deg)",
                      display: "block",
                      fontSize: "1.5vw"
                    }}>
                      Greetings from

                    </span>

                    <span
                      style={{
                        width: "12vw",
                        display: "block",
                        border: "0.5px solid black",
                        transform: " translateX(12%) translateY(-825%) rotate(-22deg)",
                      }}
                    >

                    </span>


                    <span style={{
                      height: "0",
                      display: "block",
                      paddingLeft: "5vw",
                      marginTop: "-2vw"
                    }}>
                      <img src={Foto} style={{
                        height: "20vw",
                        width: "20vw"
                      }} />

                    </span>
                  </span>
                  <span>

                  </span>
                </div>

                <div className="enb" style={{
                  textShadow: "0.6vw 0vw 0vw yellow",
                  marginLeft: "4vw",
                  marginTop: "6vw",
                  fontSize: "10vw",
                  lineHeight: "10vw",
                  color: "#021276",
                  fontStyle: "italic"
                }}>
                  /BA
                  <br />
                  SK
                </div>

              </div>

              <div
                style={{
                  width: "60vw",
                  height: "60vh",
                  display: "flex",
                  backgroundColor: "#F7F2E9",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "3vw",
                    marginBottom: "3vw",
                    borderRight: '2px solid black',
                  }}
                  onClick={() => cardClick(false)}
                >
                  <span className="lpr"
                    style={{
                      fontSize: "2vw",
                    }}
                  >
                    Ask us anything, <br /> we mean anything
                  </span>
                  <span>
                    <img src={Logo3} style={{
                      width: "10vw",
                      transform: "translateY(340%)"
                    }} />
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "3vw",
                    marginBottom: "3vw",
                    marginLeft: "2vw",
                  }}
                >
                  <form onSubmit={handleSubmit} className="enr" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignContent: "space-between",
                    height: "80%"
                  }} action="https://submit-form.com/asUSjFAHD">
                    <div className="form-group">
                      <TextField
                        label="Name"
                        variant="standard"
                        fullWidth
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        label="Email"
                        type="email"
                        name="Email"
                        variant="standard"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        label="Lay it on us"
                        variant="standard"
                        name="Message"
                        fullWidth
                        value={message}
                        onChange={handleMessageChange}
                      />
                    </div>
                    <div className="form-group">
                      <Button variant="text" color="inherit" className="contactButton" type="submit">
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </ReactCardFlip>
          </div>



          <div className="cardFoot"
            style={{
              position: "fixed",
              height: "100vh",
              top: 0,
              backgroundColor: "#000000a1",
              width: "100vw",
              zIndex: "999 "
            }}
            onClick={() => contactUsClick(false)}

          >


          </div>
          {/* <div 
          style={{
            // height: "100vh",
            // zIndex : "120"
          }}
          >

          </div> */}
        </div>
      }


      {ourWork ? <div className={`foot ${jo && "kkk"}`} ref={elementRef}
        style={{
          backgroundColor: "#021588",
          height: "max-content",
        }}
      >


        <div className="foot2">
          <div className="footLinks">
            <img src={fbLogo} alt="Facebook" />
            <img src={instaLogo} alt="Instagram" />
            <img src={LinkedinLogo} alt="Linkedin" />
          </div>
          <div className="footNav ib">
            <span className="cp" onClick={lodo}>Home</span>
            <span className="cp" onClick={nodo}>About us</span>
            <span className="cp" onClick={() => contactUsClick(true)}>Contact</span>
          </div>
          <div className="footContact cp ir">
            <span className="sayh ib">Say Hello!</span>
            <span className="infob">info@blackis.in</span>
          </div>
        </div>
        <div className="textappear enr"
          style={{
            opacity: 1,
            height: d ? "0vw" : "17vw",
            overflow: "hidden",
            transition: "height 0.5s",
            textAlign: "center",
            color: "#F5D900",
            fontSize: "3vw",
            marginTop: d ? "0vw" : "5vw",
            textTransform: "uppercase",
            lineHeight: "3.5vw"

            //     opacity: 1;
            //     height: 18vw;
            //     overflow: hidden;
            //     transition: height 0.5s ease 0s;
            //     text-align: center;
            //     color: rgb(245, 217, 0);
            //     font-size: 3vw;
            //     margin-top: 6vw;
            //     text-transform: uppercase;
            //     line-height: 3.5vw;
            // }
          }}
        >
          There are all kinds of <br />fixers in this world, if it's <br /> your brand that needs <br /> fixing, call us
        </div>
        <div className="footlogo" ref={footerRef}>
          <AnimatePresence >

            <motion.img src={Logo} alt="Bask" animate={controls}
              initial={{ height: 130 }}
            // style={{marginTop  : mtt}}
            />
          </AnimatePresence>
        </div>
      </div> :

        <div className={`foot ${jo && "kkk"}`} ref={elementRef}
          style={{
            backgroundColor: "#FFD900",
            height: "max-content",
          }}
        >


          <div className="foot2">
            <div className="footLinks">
              <img src={fbLogo} alt="Facebook" />
              <img src={instaLogo} alt="Instagram" />
              <img src={LinkedinLogo} alt="Linkedin" />
            </div>
            <div className="footNav ib">
              <span className="cp" onClick={lodo}>Home</span>
              <span className="cp" onClick={nodo}>About us</span>
              <span className="cp" onClick={() => contactUsClick(true)}>Contact</span>
            </div>
            <div className="footContact cp ir">
              <span className="sayh ib">Say Hello!</span>
              <span className="infob">info@blackis.in</span>
            </div>
          </div>
          <div className="textappear enr"
            style={{
              opacity: 1,
              height: d ? "0vw" : "17vw",
              overflow: "hidden",
              transition: "height 0.5s",
              textAlign: "center",
              color: "#021588",
              fontSize: "3vw",
              marginTop: d ? "0vw" : "5vw",
              textTransform: "uppercase",
              lineHeight: "3.5vw"
            }}
          >
            {aboutUs ?
              <>
                If you need to get in <br /> shape, join a gym. If you <br /> need to get your brand <br /> in shape, call us.
              </> :
              <>
                IF YOU WANT TO GET <br /> SOMEWHERE BOOK AN UBER. <br /> IF YOU WANT TO TAKE YOUR <br /> BRAND SOMEWHERE, CALL US
              </>
            }

          </div>
          <div className="footlogo" ref={footerRef}>
            <AnimatePresence >

              <motion.img src={Logo} alt="Bask" animate={controls}
                initial={{ height: 130 }}
                style={{
                  willChange: "transform, opacity", // Hardware acceleration
                  imageRendering: "pixelated", // Ensure crisp rendering
              }}
              />
            </AnimatePresence>
          </div>
        </div>

      }


      {/* <div className={`foot ${jo && "kkk"}`} ref={elementRef} style={{
          backgroundColor: "#FFD900",
          height : "191px"
        }}>  


            <div className="foot2">
                <div className="footLinks"> 
                  <img src={fbLogo} alt="Facebook" />
                  <img src={instaLogo} alt="Instagram" />
                  <img src={LinkedinLogo} alt="Linkedin" />
                </div>
                <div  className="footNav ib">
                   <span className="cp" onClick={lodo}>Home</span>
                   <span className="cp" onClick={nodo}>About us</span>
                   <span className="cp">Contact</span>
                </div>
                <div className="footContact cp ir">
                    <span  className="sayh ib">Say Hello!</span>
                    <span className="infob">info@blackis.in</span>
                </div>
            </div>
            <div className="footlogo" ref={footerRef}>
                <AnimatePresence mode="wait ">

                    <motion.img src={Logo} alt="Bask"  animate={controls}
            initial={{ height: 100 }}
            style={{marginTop  : mtt}}
            />
                </AnimatePresence>
            </div>
        </div> */}

    </>
  );
}

export default FooterComp;