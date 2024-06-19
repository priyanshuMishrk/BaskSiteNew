import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import i1 from "../images/2.jpg"
import i2 from "../images/3.jpg"
import i3 from "../images/5.1.jpg"
import i4 from "../images/DSCF5109.jpg"
import i5 from "../images/Dream makers playlist.jpg"
import i6 from "../images/Donald.png"
import i7 from "../images/Car.png"
import i8 from "../images/building.png"
import i9 from "../images/duck.png"

const Card = () => {
    const [flippedIndices, setFlippedIndices] = useState([]);
    const images = [i1, i2, i3, i4, i5,i6, i7, i8, i9];

    useEffect(() => {
        const generateUniqueIndices = () => {
            const indices = new Set();
            while (indices.size < 5) {
                let randomIndex = Math.floor(Math.random() * 9);
                indices.add(randomIndex);
            }
            return Array.from(indices);
        };

        const interval = setInterval(() => {
            setFlippedIndices(generateUniqueIndices());
        }, 2000); // Change indices every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="containorr">
            {Array.from({ length: 9 }, (_, index) => (
                <ReactCardFlip
                    key={index}
                    isFlipped={flippedIndices.includes(index)}
                    flipDirection="horizontal"
                >
                    <div className={index%2 === 0? 'yellowback' : 'blueback'}>
                    </div>
                    <div className="card">
                    <img src={images[index]} alt="" loading="lazy" />
                    </div>
                </ReactCardFlip>
            ))}
        </div>
    );
};

export default Card;
