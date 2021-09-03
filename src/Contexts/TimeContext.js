import { createContext, useState } from 'react';

const TimeContext = createContext();

const TimeContextProvider = ({ children }) => {
  const [time, setTime] = useState(0);

  const timeContext = {
    time,
    setTime
  }
  return (
  <TimeContext.Provider value={timeContext}>
    {children}
  </TimeContext.Provider>
)};

export  { TimeContext, TimeContextProvider };
