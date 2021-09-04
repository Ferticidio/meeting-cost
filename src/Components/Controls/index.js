import { useContext } from 'react';

import { TimeContext } from '../../Contexts/TimeContext';

import './Controls.css'

const Controls = () => {
  const { setTime, isActive, setIsActive } = useContext(TimeContext);
  const reset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <div className="controls">
      <button onClick={() => setIsActive(!isActive)} className="start">
        {isActive ? "Pause": "Start"}
      </button>
      <button onClick={reset} className="reset">Reset</button>
    </div>
  );
};

export default Controls;
