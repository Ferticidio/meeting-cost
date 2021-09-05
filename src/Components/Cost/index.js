import { useContext } from 'react';
import { TimeContext } from '../../Contexts/TimeContext';
import { AttendeesContext } from '../../Contexts/AttendeesContext';

import './Cost.css';
import Timer from '../Timer';

const Cost = () => {
  const { time } = useContext(TimeContext);
  const { attendees, hourSalary } = useContext(AttendeesContext);
  const secondValue = attendees*hourSalary/(60*60);
  const currencyFormat = (num) =>'$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <div className="cost">
      <h1>Meeting Cost</h1>
      <p>At an avg salary of {currencyFormat(hourSalary)} per hour and with {attendees} attendee{attendees > 1 ? 's' : ''} this meeting cost is: </p>
      <p className="big">
        Cost: {currencyFormat(time*secondValue)}
      </p>
      <Timer />
    </div>
  );
};

export default Cost;
