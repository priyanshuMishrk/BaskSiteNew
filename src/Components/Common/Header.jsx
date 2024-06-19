import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo/BaskLogo.png"
import { motion , AnimatePresence} from 'framer-motion';
import { useLocation, useNavigate } from "react-router";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isC, setIsC] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    function gameee() {
        navigate("/")
    }

    function lodo(){
        const current = location.pathname
        if (current === "/work"){
            toggleMenu()
          }
        navigate("/work")
    }

    function hodo(){
        const current = location.pathname
        if (current === "/"){
            toggleMenu()
          }
        navigate("/")
    }

    function nodo(){
        const current = location.pathname
        if (current === "/about"){
            toggleMenu()
          }
        navigate("/about")
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    const [style, setStyle] = useState({});
    const [jaja , setJaja] = useState(false)

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
  

  useEffect(() => {
    const current = location.pathname
    if (current === "/"){
      setIsC(true)
    }
    if (current === "/about" || current === "/about1" || current === "/work"){
        setJaja(true)
    }
  }, []);

    return (
        <>
            <div className={`header ${jaja ? "klallal" : isC ? "bl" : "y"}`}>
                <div className="logo  cp" onClick={gameee}>
                    <img src={Logo} alt="Logo of the site" className="logoSite" />
                </div>
                <div className="navm">

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
                                <span className="sb" onClick={hodo}>
                                    Home
                                </span>
                                <span className="sb" onClick={lodo}>
                                    Work
                                </span>
                                <span className="sb" onClick={nodo}>
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