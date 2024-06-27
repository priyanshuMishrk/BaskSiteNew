// src/Scroller.js
import React from 'react';
import './Scroller.css';

const Scroller = () => {
    const items = [
        "First line of text",
        "Second line of text",
        "Third line of text",
        "Fourth line of text"
    ];

    return (
        <div className="scroller">
            <div className="scroller-content">
                {items.concat(items).map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default Scroller;
