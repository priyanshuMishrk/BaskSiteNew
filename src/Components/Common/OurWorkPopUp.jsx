import React, { useState, useEffect } from "react";
import Logo from "../../images/Logo/BaskLogo.png"
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from "react-router";


const Header = (onClose , Title ,   Description ,  imgArray) => {

    return (
        <>
            <div >
                <div className="jadennnnn">
                    <span onClick={onClose}>
                        closeeeeeeee
                    </span>
                </div>
                <div className="klouse">

                </div>
            </div>

        </>
    );
};

export default Header;