import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = () => {
    const [flippedIndices, setFlippedIndices] = useState([]);

    useEffect(() => {
        const generateUniqueIndices = () => {
            const indices = new Set();
            while (indices.size < 3) {
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
                        Item {index + 1}
                    </div>
                    <div className={index%2 === 0? 'yellowback' : 'blueback'}>
                        Flipped Item {index + 1}
                    </div>
                </ReactCardFlip>
            ))}
        </div>
    );
};

export default Card;
