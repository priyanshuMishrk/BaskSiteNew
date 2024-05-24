import React, { useState, useEffect, useRef } from 'react';
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

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const logoArray = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13, logo14,
    logo15, logo16
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logoArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logoArray.length]);

  useEffect(() => {
    if (carouselRef.current) {
      const visibleImages = 5;
      const itemWidth = carouselRef.current.offsetWidth / visibleImages;

      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });

      if (currentIndex === logoArray.length - visibleImages) {
        setCurrentIndex(0);
      }
    }
  }, [currentIndex, logoArray.length]);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {logoArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
