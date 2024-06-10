import React, { useState, useEffect } from 'react';

const NowClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000); // 실시간 시간 업데이트 (1초)
        return () => clearInterval(timer);
        }, []);

    return (
        <div>
        <h1>현재 시간: {currentTime.toLocaleTimeString()}</h1>
        </div>
    );
};

export default NowClock;