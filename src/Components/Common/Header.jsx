import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo/BaskLogo.png"
import { useNavigate } from "react-router-dom";
import { motion , AnimatePresence} from 'framer-motion';
import WaterWave from 'react-water-wave';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function lodo(){
        navigate("/work")
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the button
        const y = e.clientY - rect.top; // Y position within the button
    
        setStyle({
          '--mouse-x': `${x}px`,
          '--mouse-y': `${y}px`,
        });
      };

  const handleMouseLeave = () => {
    setStyle({});
  };

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="Logo of the site" className="logoSite" />
                </div>
                <div className="navm">
                    {/* <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type:"just", stiffness: 300, damping: 10 }}
                        onClick={toggleMenu}
                        className="navmt sm"
                    >
                        Menu
                    </motion.div> */}

<span
      className="navmt sm watery-button"
      onClick={toggleMenu}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      Menu
    </span>
                    <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="slider"
                            initial={{ top: "-100%" }}
                            animate={{ top: 0, transition: { ease: "easeOut", type: "spring" } }}
                            exit={{ top: "-100%", transition: { ease: "easeOut", type: "spring", duration: 1 } }}
                            onExitComplete
                        >
                            
                            <button className="close-buttn sb" onClick={toggleMenu}>X</button>
                            <div className="menuItems">
                                <span className="sb">
                                    Home
                                </span>
                                <span className="sb" onClick={lodo}>
                                    Work
                                </span>
                                <span className="sb">
                                    About us
                                </span>
                            </div>
                        </motion.div>
                    )}

                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default Header;