import React from 'react';
import Day from './Day';

function Week(props){

const day = props.day
  return(
    <div className="row">
      {props.datesArray.map(n => <Day number={n} day={day}/>)}
    </div>
  )
}

export default Week