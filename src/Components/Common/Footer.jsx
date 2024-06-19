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
import C1 from "../../images/C1L.png"
import Foto from '../../images/postcard.png';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import { debounce } from 'lodash';
import { useFormspark } from "@formspark/use-formspark";
import Paper from "../../images/paper.jpg"



function FooterComp() {
  const FORMSPARK_FORM_ID = "asUSjFAHD";
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
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
  const [height, setHeight] = useState(0)
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


    // if (current === "/") {
    //   setJo(true)

    // }
    const handleScroll =
      debounce(
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
    const initialHeight = height;
    const newHeight = height + (scrollDistance / 300) * maxIncrease;
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


  const joyfulGaming = () => {
    // navigate('mailto:info@blackis.in')
    window.location = 'mailto:info@blackis.in'
  }


  const [isVisible, setIsVisible] = useState(false);
  const [isVisibles, setIsVisibles] = useState(false);

  function contactUsClick(bool) {
    if (dimensions.width > 700){
      if(bool){
        setTimeout(() => {
          setFlipper(true);
      }, 2000); // 10000 milliseconds = 10 seconds
      }
      else{
        setFlipper(false)
      }
      setIsVisible(bool)
    }
    else {
      if(bool){
        setTimeout(() => {
          setFlipper(true);
      }, 2000); // 10000 milliseconds = 10 seconds
      }
      else{
        setFlipper(false)
      }
      setIsVisibles(bool)
    }
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
    if (e.key !== 'Enter') return
    e.preventDefault();
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
      Name: name,
      Email: email,
      Message: message
    }
    try {
      await submit(formData);
      alert("Form submitted");
      setEmail("")
      setMessage("")
      setName("")
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

  function navToMap() {
    const url = "https://maps.app.goo.gl/RgZKwuUCZf3qvp2w6"
    window.open(url, '_blank');
  }


  // This is to make responsiveness tough and rigid (yeah the tough and rigid part was not neccesary)


  useEffect(() => {
    if (dimensions.width > 800) {
      setHeight(150)
    } else if (dimensions.width > 600) {
      setHeight(100)
    } else if (dimensions.width > 400) {
      setHeight(70)
    } else {
      setHeight(40)
    }


  }, [dimensions])


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
                  display: "flex"
                }}
                onClick={() => cardClick(true)}
              >
                <div className="magipic">
                  <img src={C1} alt="B" />
                </div>

                <div className="FrontTextCon">
                  <span className="FontTitleCon enr">
                    Let's  get
                    <span
                      style={{
                        fontStyle: "italic",
                        marginLeft: "0.4vw"
                      }}
                    >
                      kebabs <br />
                    </span>
                    and sulemani?
                  </span>
                  <span className="FrontParaCon enr"
                    style={{
                      fontStyle: "italic"
                    }}
                  >
                    We are pretty easy to find.
                  </span>
                  <span className="cp frontAddrCon enr" onClick={navToMap}>
                    No. 3-B, 3rd Floor, Platinum Square, No.86, Coles Road, Frazer Town, Bangalore 560005

                  </span>
                </div>


              </div>

              <div
                style={{
                  width: "60vw",
                  height: "60vh",
                  display: "flex",
                  backgroundColor: "#F7F2E9",
                }}

                className="backFoot"

              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    // flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "3vw",
                    marginBottom: "3vw",
                    borderRight: '2px solid #0017A2',
                    color: "#00169B"
                  }}
                  onClick={() => cardClick(false)}
                >
                  <span className="climsp">
                    <img src={C1} alt="bb" className="c1im" />
                  </span>
                  <span className="eni jaodjasojd"
                  >
                    Gutsy indeed, <br />
                    Ask us anything
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "3vw",
                    marginBottom: "3vw",
                    marginLeft: "2vw",
                  }}

                >
                  <form onSubmit={handleSubmit} className="enr bakckkck" style={{
                    color: "#300DBE !important",
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
                        // color="#300DBE"
                        fullWidth
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#300DBE', // Bottom border color before focus
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#300DBE', // Bottom border color after focus
                          },
                          '& .MuiInputBase-input': {
                            color: '#300DBE', // Input text color
                          },
                          '& .MuiInputLabel-root': {
                            color: '#300DBE', // Placeholder color
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#300DBE', // Placeholder color when focused
                          },
                        }}

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
                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#300DBE', // Bottom border color before focus
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#300DBE', // Bottom border color after focus
                          },
                          '& .MuiInputBase-input': {
                            color: '#300DBE', // Input text color
                          },
                          '& .MuiInputLabel-root': {
                            color: '#300DBE', // Placeholder color
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#300DBE', // Placeholder color when focused
                          },
                        }}
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
                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#300DBE', // Bottom border color before focus
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#300DBE', // Bottom border color after focus
                          },
                          '& .MuiInputBase-input': {
                            color: '#300DBE', // Input text color
                          },
                          '& .MuiInputLabel-root': {
                            color: '#300DBE', // Placeholder color
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#300DBE', // Placeholder color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <Button variant="text" color="inherit" className="contactButton" type="submit" disabled={submitting}>
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
        </div>
      }



{isVisibles &&
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
              <div className="frontFoots"
                onClick={() => cardClick(true)}
              >
                <div className="titlesss enm">
                  Let's get kebabs and sulemani?
                </div>

                <div className="etfff el">
                  We're pretty easy to find.
                </div>

                <div className="jftst im">
                    Just follow the smell of coffee to 
                </div>

                <div className="addRess ib">
                  3B,Platinum Square, Coles Road
                </div>

                <div className="secondimgof">
                  <img src={Logo3} alt="" />
                </div>

              </div>

              <div

                className="backFootss"

              >
                  <div className="chatterpatter" onClick={() => cardClick(false)}>
                    We Love 
                    to chat,
                    about
                  </div>

                  <div className="chatterpatter2" onClick={() => cardClick(false)}>
                    politics,sports,art,cinema,food,food at sporting events,really anything under the sun.
                  </div>



                <div
                  className="w-100"
                >
                  <form onSubmit={handleSubmit} className="enr bakckkckss"  action="https://submit-form.com/asUSjFAHD">
                    <div className="form-group">
                      <TextField
                        label="Name"
                        variant="standard"
                        className="srfj"
                        // color="#300DBE"
                        fullWidth
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#300DBE', // Bottom border color before focus
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#300DBE', // Bottom border color after focus
                          },
                          '& .MuiInputBase-input': {
                            color: '#300DBE', // Input text color
                          },
                          '& .MuiInputLabel-root': {
                            color: '#300DBE', // Placeholder color
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#300DBE', // Placeholder color when focused
                          },
                        }}

                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        label="Email"
                        type="email"
                        name="Email"
                        variant="standard"
                        fullWidth
                        className="srfj"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#300DBE', // Bottom border color before focus
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#300DBE', // Bottom border color after focus
                          },
                          '& .MuiInputBase-input': {
                            color: '#300DBE', // Input text color
                          },
                          '& .MuiInputLabel-root': {
                            color: '#300DBE', // Placeholder color
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#300DBE', // Placeholder color when focused
                          },
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        label="Lay it on us"
                        variant="standard"
                        name="Message"
                        fullWidth
                        value={message}
                        className="srfj"
                        onChange={handleMessageChange}
                        onKeyDown={handleSubmit}
                        sx={{
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#300DBE', // Bottom border color before focus
                          },
                          '& .MuiInput-underline:after': {
                            borderBottomColor: '#300DBE', // Bottom border color after focus
                          },
                          '& .MuiInputBase-input': {
                            color: '#300DBE', // Input text color
                          },
                          '& .MuiInputLabel-root': {
                            color: '#300DBE', // Placeholder color
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#300DBE', // Placeholder color when focused
                          },
                        }}
                      />
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
            height: "17vw",
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

            <motion.img src={Logo} alt="Bask"
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
            <div className="footContact cp ir" onClick={joyfulGaming}>
              <span className="sayh ib">Say Hello!</span>
              <span className="infob">info@blackis.in</span>
            </div>
          </div>
          <div className="textappear enr"
            style={{
              opacity: 1,
              height: "17vw",
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

              <motion.img src={Logo} alt="Bask"
                style={{
                  willChange: "transform, opacity", // Hardware acceleration
                  imageRendering: "pixelated", // Ensure crisp rendering
                }}
              />
            </AnimatePresence>
          </div>
        </div>

      }

    </>
  );
}

export default FooterComp;