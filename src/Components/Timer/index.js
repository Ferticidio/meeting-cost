import { useState, useEffect, useContext } from 'react';
import { TimeContext } from '../../Contexts/TimeContext';

import './Timer.css';

const Timer = () => {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);

  const { time, setTime } = useContext(TimeContext);

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

    return () => clearInterval(intervalId);
  }, [isActive, setTime, time])

  const reset = () => {
    setIsActive(false);
    setTime(0);
    setSecond('00');
    setMinute('00')
  };

  return (
    <div className="timer column">
      <div>
        { minute !== '00' &&
            <div className="big">{minute} Minutes</div>
        }
        <div className={minute === '00' ? 'big' : 'small'}>{second} Seconds</div>
      </div>
      <div>
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? "Pause": "Start"}
        </button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
   </div>
  )
}

export default Timer;
