import React from "react";

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday']

function CurrentDate () {
  const dayOfWeek = new Date().getDay();
  const dayName = dayNames[dayOfWeek]
    return (
    <div className="calendar-side left">
      <h5>{dayName}</h5>
      <h4>{new Date().getDate()}</h4>
    </div>
    );

}
export default CurrentDate;