import React from "react";
import MonthTable from "./MonthTable";

class MyCalendar extends React.Component {
 
  static defaultProps = {
    years: [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
  
  SelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;
    this.props.getValue({today: new Date(year, month)})

  }; 
  
  render(){
    const {years, monthNames} = this.props;
    return (
      <div className="calendar-side">
        <div className="nav">
        <button className="title" onClick={this.props.PrevMonth}>{'<'}</button>
        <select 
        className="title"
        ref={element => this.monthSelect = element}
        onChange={this.SelectChange}
        defaultValue={this.props.date.getMonth()}
        value={this.props.date.getMonth()}
        >
          
          {monthNames.map((name, index) => 
            <option key={name} value={index}>{name}</option>
          )}
        </select>
        <select 
        className="title" 
        ref={element => this.yearSelect = element}
        onChange={this.SelectChange}
        defaultValue={this.props.date.getFullYear()}
        value={this.props.date.getFullYear()}
        >
          {years.map((year) => 
            <option key={year} value={year}>{year}</option>
          )}</select>
        <button className="title" onClick={this.props.NextMonth}>{'>'}</button>
        </div>
        <MonthTable date = {this.props.date}/>
      </div>
    )
  }
}

export default MyCalendar