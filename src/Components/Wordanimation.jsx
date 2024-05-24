import { useEffect, useState } from 'react';

function WordAnimation() {

    const [currentWord, setCurrentWord] = useState(0);
    const words = ["community", "consumer", "Algorithm", "competition", "consumer"];
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWord((currentWord + 1) % words.length);
      }, 4000); // Change word every 4 seconds
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentWord]);
    return (
        <div className="carouselW p-1">
          <p className="carouselText ib">Ideas that create a difference to the <span className="animated-word">{words[currentWord]}</span>
            </p>
      </div>
    );
  }

  export default WordAnimation;