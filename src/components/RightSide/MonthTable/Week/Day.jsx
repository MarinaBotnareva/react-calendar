import React from 'react'
import {format} from 'date-fns'

function Day(props){
  
  return(
    <div className={"cell" + (`${new Date(format(props.day, `yyyy-MM-${props.number} 00:00:00.0`))}` === `${new Date(format(new Date, `yyyy-MM-dd 00:00:00.0`))}` ? " current" : "") }>{props.number}</div>
  )
}

export default Day