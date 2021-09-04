import { useState, useEffect, useContext } from 'react';
import { TimeContext } from '../../Contexts/TimeContext';

import './Timer.css'

const Timer = () => {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');

  const { time, setTime, isActive } = useContext(TimeContext);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = time % 60;
        const minuteCounter = Math.floor(time / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setTime(time => time + 1);
      }, 1000)
    }

    if (!isActive && time === 0) { // Reset
      setSecond('00');
      setMinute('00');
    }
    return () => clearInterval(intervalId);
  }, [isActive, setTime, time])


  return (
    <div className="timer">
      <h2>Meeting duration</h2>
      <div>
        { minute !== '00' &&
            <div>{minute} Minutes</div>
        }
        <div>{second} Seconds</div>
      </div>
   </div>
  )
}

export default Timer;
