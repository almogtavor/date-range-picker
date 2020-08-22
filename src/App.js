import React from "react";
import "./App.css";
import CalendarConatiner from './containers/CalendarContainer';
import LowerFooterContainer from './containers/LowerFooterContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <div className="calendar-component">
          <HeaderContainer/>
          <CalendarConatiner/>
          <LowerFooterContainer/>
      </div>
    </div>
  );
}

export default App;
