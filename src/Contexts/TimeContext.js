import { createContext, useState } from 'react';

const TimeContext = createContext();

const TimeContextProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const timeContext = {
    time,
    setTime,
    isActive,
    setIsActive,
  }
  return (
  <TimeContext.Provider value={timeContext}>
    {children}
  </TimeContext.Provider>
)};

export  { TimeContext, TimeContextProvider };
