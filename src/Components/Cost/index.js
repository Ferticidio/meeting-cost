import { useContext } from 'react';
import { TimeContext } from '../../Contexts/TimeContext';
const Cost = () => {
  const { time } = useContext(TimeContext);
  const secondValue = 25/(60*60);
  const currencyFormat = (num) =>'$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <div className="cost column">
      <div>At an avg of $25 per hour and with one attendee this meeting cost is: </div>
      <div className='big'>
        Cost: {currencyFormat(time*secondValue)}
      </div>
    </div>
  );
};

export default Cost;
