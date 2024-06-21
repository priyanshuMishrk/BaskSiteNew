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
    const images = ["https://d1bxlu89wy43u2.cloudfront.net/2.jpg", "https://d1bxlu89wy43u2.cloudfront.net/3.jpg", "https://d1bxlu89wy43u2.cloudfront.net/5.1.jpg", "https://d1bxlu89wy43u2.cloudfront.net/DSCF5109.jpg", "https://d1bxlu89wy43u2.cloudfront.net/Dream makers playlist.jpg","https://d1bxlu89wy43u2.cloudfront.net/Donald.png", "https://d1bxlu89wy43u2.cloudfront.net/Car.png","https://d1bxlu89wy43u2.cloudfront.net/building.png" , "https://d1bxlu89wy43u2.cloudfront.net/duck.png"];
    const images2 = ["https://d1bxlu89wy43u2.cloudfront.net/Spine-Guard-PMAX-Ads-Option2-1200x1200.jpg","https://d1bxlu89wy43u2.cloudfront.net/n12.jpg" , "https://d1bxlu89wy43u2.cloudfront.net/n13.jpg", "https://d1bxlu89wy43u2.cloudfront.net/n14.png", "https://d1bxlu89wy43u2.cloudfront.net/n15.jpg", "https://d1bxlu89wy43u2.cloudfront.net/n16.jpg", "https://d1bxlu89wy43u2.cloudfront.net/n17.jpg", "https://d1bxlu89wy43u2.cloudfront.net/Peps-FB-ads-Option2-1200x1200.jpg", "https://d1bxlu89wy43u2.cloudfront.net/Peps-PMAX--ads-Option2-1200x1200.jpg" ]


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
                    <div className="card">
                    <img src={images2[index]} loading="lazy" alt=""/>
                    </div>
                    <div className="card">
                    <img src={images[index]} loading="lazy" alt=""/>
                    </div>
                </ReactCardFlip>
            ))}
        </div>
    );
};

export default Card;
