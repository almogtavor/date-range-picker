import React from "react";
import "./App.css";
import CalendarConatiner from './containers/CalendarContainer';
import LowerFooterContainer from './containers/LowerFooterContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <div className="date-range-picker">
        <div className="calendar-component right">
            <HeaderContainer/>
            <CalendarConatiner/>
            <LowerFooterContainer/>
        </div>
        <div className="calendar-component left">
            <HeaderContainer/>
            <CalendarConatiner/>
            <LowerFooterContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
