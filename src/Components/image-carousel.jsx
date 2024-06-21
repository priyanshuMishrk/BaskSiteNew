import React, { useEffect, useState } from 'react';
import Marquee from 'react-marquee-slider';
const logo1 = "https://d1bxlu89wy43u2.cloudfront.net/110232 1.svg";
const logo2 = "https://d1bxlu89wy43u2.cloudfront.net/Adarsh-Developers 1.svg";
const logo3 = "https://d1bxlu89wy43u2.cloudfront.net/Aukera_Teal_Logo_249x79-01 1.svg";
const logo4 = "https://d1bxlu89wy43u2.cloudfront.net/CNTC-The-Presidential-Tower-Logo.svg";
const logo5 = "https://d1bxlu89wy43u2.cloudfront.net/Embassy_Group_Logo.svg";
const logo6 = "https://d1bxlu89wy43u2.cloudfront.net/PGI-Logo-New-2 1.svg";
const logo7 = "https://d1bxlu89wy43u2.cloudfront.net/PHF.svg";
const logo8 = "https://d1bxlu89wy43u2.cloudfront.net/RMZ_LOGO 1.svg";
const logo9 = "https://d1bxlu89wy43u2.cloudfront.net/William-Penn-Viviana-Mall-Thane-Mumbai 1.svg";
const logo10 = "https://d1bxlu89wy43u2.cloudfront.net/aratt logo Black 1.svg";
const logo11 = "https://d1bxlu89wy43u2.cloudfront.net/cn 1.svg";
const logo12 = "https://d1bxlu89wy43u2.cloudfront.net/gkv.svg";
const logo13 = "https://d1bxlu89wy43u2.cloudfront.net/huggies-logo 1.svg";
const logo14 = "https://d1bxlu89wy43u2.cloudfront.net/images 1.svg";
const logo15 = "https://d1bxlu89wy43u2.cloudfront.net/l.svg";
const logo16 = "https://d1bxlu89wy43u2.cloudfront.net/peps logo copy 1.svg";
const logo17 = "https://d1bxlu89wy43u2.cloudfront.net/channels4_profile.svg"
const logo18 = "https://d1bxlu89wy43u2.cloudfront.net/concorde.svg"
const logo19 = "https://d1bxlu89wy43u2.cloudfront.net/ichitthokoo.jpeg"
const logo20 = "https://d1bxlu89wy43u2.cloudfront.net/waterfront_logo01.jpg"
const logo21 = "https://d1bxlu89wy43u2.cloudfront.net/weber-logo.png"
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
            <img src={image} alt={`img-${index}`} loading="lazy"/>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;