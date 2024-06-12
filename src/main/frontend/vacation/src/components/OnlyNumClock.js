import React, { useState, useEffect } from 'react';

const OnlyNumClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (time) => {
      const hours = String(time.getHours()).padStart(2, '0');
      const minutes = String(time.getMinutes()).padStart(2, '0');
      const seconds = String(time.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    };
  
    return (
      <>
        {formatTime(currentTime)}
      </>
    );
  };

export default OnlyNumClock;