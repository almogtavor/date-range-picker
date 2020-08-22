import React from "react";
import "./App.css";
import CalendarConatiner from './containers/CalendarContainer';
import LowerFooterContainer from './containers/LowerFooterContainer';

function App() {
  return (
    <div className="App">
      <div className="calendar-component">
          <CalendarConatiner/>
          <LowerFooterContainer/>
      </div>
    </div>
  );
}

export default App;
