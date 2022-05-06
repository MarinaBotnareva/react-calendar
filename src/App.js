import React from "react";
import {setDate} from 'date-fns'
import './App.css';
import CurrentDate from "./components/LeftSide/CurrentDate";
import CurrentMonth from "./components/RightSide/CurrentMonth";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
    }
  }

  NextMonth = () => {
    this.setState((state) => {
      return {
        ...state,
        today: state.today.getMonth() === 12 ? new Date(state.today.getFullYear() + 1, 0, 1) : new Date(state.today.getFullYear(), state.today.getMonth() + 1, 1) 
      }
    })
  
  };
  
  PrevMonth = () => {
    this.setState((state) => {
      return {
        ...state,
        today: state.today.getMonth() === 1 ? new Date(state.today.getFullYear() - 1, 12, 1) : new Date(state.today.getFullYear(), state.today.getMonth() - 1, 1) 
      }
    })
  }

  getValue = (selectState) => {
    this.setState((state)=>{
      return {
        ...state,
        ...selectState
      }
    })
  }

  render() {
    const{today} = this.state;

    return (
      
         <main className="calendar">
          <CurrentDate date={today}/>
          <CurrentMonth date={today} NextMonth={this.NextMonth} PrevMonth={this.PrevMonth} getValue={this.getValue}/>
        </main>
    );
  }
}

export default App;

