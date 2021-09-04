import { useContext } from "react";
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

  const handleAttendeesChange = (event) => setAttendees(+event.target.value);
  const handleHourSalaryChange = (event) => setHourSalary(+event.target.value);
  return (
    <div className="flex_1 attendees">
      <h2>Set meeting attendees and hourly salary</h2>
      <div className="input_control">
        <label for="attendees">Ateendees:</label>
        <input name="attendees" type="number" onChange={handleAttendeesChange} value={attendees} />
      </div>
      <div className="input_control">
        <label for="salary">AVG salary:</label>
        <input name="salary" type="number" onChange={handleHourSalaryChange} value={hourSalary} />
      </div>
      <Controls />
    </div>
  )
};

export default Attendees;
