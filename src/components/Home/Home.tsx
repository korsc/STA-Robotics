import React, { useEffect, useState } from 'react';
import './home.css';

const Home: React.FC = () => {
  
  const [visible, setVisible] = useState<boolean>(true);
  const [letterCount, setLetterCount] = useState<number>(1);
  const [x, setX] = useState<number>(1);
  const [waiting, setWaiting] = useState<boolean>(false);
  const words = ['STA ROBOTICS', 'VRC TEAM 30405'];

  // Define the current word index
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const consoleInterval = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        setX(1);

        setTimeout(() => {
          setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
          setLetterCount(1); // Reset letter count
          setWaiting(false);
        }, 1000);
      } else if (letterCount === words[currentWordIndex].length + 1 && !waiting) {
        setWaiting(true);

        setTimeout(() => {
          setX(-1);
          setLetterCount(letterCount - 1);
          setWaiting(false);
        }, 1000);
      } else if (!waiting) {
        setLetterCount((prevLetterCount) => prevLetterCount + x);
      }
    }, 120);

    const underscoreInterval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => {
      clearInterval(consoleInterval);
      clearInterval(underscoreInterval);
    };
  }, [currentWordIndex, letterCount, waiting]);

  // Calculate the container width dynamically based on the current word's length
  const containerStyle: React.CSSProperties = {
    width: `${(words[currentWordIndex].length + 1) * 85}px`,
    maxWidth:'75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
<section id="home">

    
    <div className="console-container" style={containerStyle}>
      <span style={{ color: 'tomato' }} className=''>
        {words[currentWordIndex].substring(0, letterCount)}
      </span>
      <div className={`console-underscore ${visible ? '' : 'hidden'}`} id="console">
        &#95;
      </div>
    </div>
    <div className='text-md md:text-2xl black-text flex justify-center relative underline font-semibold'>
      Vex Robotics League | LDCSB Robotics League</div>
    </section>
  );
};

export default Home;
