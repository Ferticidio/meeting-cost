import { useContext, useState } from "react";
import { AttendeesContext } from "../../Contexts/AttendeesContext";
import Controls from "../Controls";

import './Attendees.css'
const Attendees = () => {
  const {
    attendees,
    setAttendees,
    hourSalary,
    setHourSalary,
  } = useContext(AttendeesContext);

  const [isHidden, setIsHidden] = useState(false);

  const toggleIsHidden = () => setIsHidden(!isHidden);

  const handleAttendeesChange = (event) => setAttendees(+event.target.value);
  const handleHourSalaryChange = (event) => setHourSalary(+event.target.value);
  return (
    <div className={`flex_1 attendees ${isHidden ? 'hidden' : ''}`}>
      {!isHidden ?
        (
          <h2>Set meeting attendees and hourly salary</h2>
        ):
        <h2 onClick={toggleIsHidden}>#</h2>}
      {!isHidden &&
        <div className="input_control">
          <label for="attendees">Ateendees:</label>
         <input name="attendees" type="number" onChange={handleAttendeesChange} value={attendees} />
        </div>
      }
      {!isHidden &&
        <div className="input_control">
          <label for="salary">AVG salary:</label>
          <input name="salary" type="number" onChange={handleHourSalaryChange} value={hourSalary} />
        </div>
      }
      {!isHidden &&
        <Controls />
      }
      <div>
        <button class="hideButton" title={isHidden ? 'Show controls' : 'Hide controls'} onClick={toggleIsHidden}>
          {isHidden ? '>>>' : '<<<'}
        </button>
      </div>
    </div>
  )
};

export default Attendees;
