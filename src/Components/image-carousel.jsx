import logo1 from "../Icons/brand/110232 1.svg";
import logo2 from "../Icons/brand/Adarsh-Developers 1.svg";
import logo3 from "../Icons/brand/Aukera_Teal_Logo_249x79-01 1.svg";
import logo4 from "../Icons/brand/CNTC-The-Presidential-Tower-Logo.svg";
import logo5 from "../Icons/brand/Embassy_Group_Logo.svg";
import logo6 from "../Icons/brand/PGI-Logo-New-2 1.svg";
import logo7 from "../Icons/brand/PHF.svg";
import logo8 from "../Icons/brand/RMZ_LOGO 1.svg";
import logo9 from "../Icons/brand/William-Penn-Viviana-Mall-Thane-Mumbai 1.svg";
import logo10 from "../Icons/brand/aratt logo Black 1.svg";
import logo11 from "../Icons/brand/cn 1.svg";
import logo12 from "../Icons/brand/gkv.svg";
import logo13 from "../Icons/brand/huggies-logo 1.svg";
import logo14 from "../Icons/brand/images 1.svg";
import logo15 from "../Icons/brand/l.svg";
import logo16 from "../Icons/brand/peps logo copy 1.svg";
import logo17 from "../Icons/brand/channels4_profile.svg"
import logo18 from "../Icons/brand/concorde.svg"
import React, { useEffect, useState } from 'react';
import Marquee from 'react-marquee-slider';
import logo19 from "../images/BrandWork/ichitthokoo.jpeg"
import logo20 from "../images/BrandWork/waterfront_logo01.jpg"
import logo21 from "../images/BrandWork/weber-logo.png"
// import './Marquee.css';

const MarqueeComponent = ({ dir }) => {
  const logoArray = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13, logo14,
    logo15, logo16
  ];

  const [logos , setLogos] = useState([])

  const [directions , setDirection] = useState("")

  useEffect(() => {
    if (dir === "right"){
      setDirection("rtl")
      setLogos([ logo1, logo2, logo3, logo4, logo5, logo6, logo7,
        logo8, logo10, logo11, logo9])
    } else {
        setDirection("ltr")
        setLogos([ logo12, logo13, logo14,
          logo15, logo16,
          logo17, logo18, logo19 , logo20 , logo21])
    }
}, []);

  

  return (
    <div className="marquee-container">
      <Marquee velocity={20} minScale={0.7} resetAfterTries={200} direction={directions}  className="something">
        {logos.map((image, index) => (
          <div key={index} className="marquee-item">
            <img src={image} alt={`img-${index}`}  loading="lazy"/>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;