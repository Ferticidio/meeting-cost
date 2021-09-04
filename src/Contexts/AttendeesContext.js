import { createContext, useState } from 'react';

const AttendeesContext = createContext();

const AttendeesContextProvider = ({ children }) => {
  const [attendees, setAttendees] = useState(2);
  const [hourSalary, setHourSalary] = useState(25);

  const attendeesContext = {
    attendees,
    setAttendees,
    hourSalary,
    setHourSalary,
  }
  return (
  <AttendeesContext.Provider value={attendeesContext}>
    {children}
  </AttendeesContext.Provider>
)};

export  { AttendeesContext, AttendeesContextProvider };
