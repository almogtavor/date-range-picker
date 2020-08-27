import React, {useState} from "react";
import "./App.css";
import DateRangePickerContainer from './containers/DateRangePickerContainer';
import LowerFooterContainer from './containers/LowerFooterContainer';
import HeaderContainer from './containers/HeaderContainer';

function App(props) {
  return (
    <div className="App">
      <div className="date-range-picker" style={{
        "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
        "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
      }}>
        <DateRangePickerContainer 
            language={props.language} 
            startYear={props.startYear} 
            endYear={props.endYear}
            firstDayOfWeekIndex={props.firstDayOfWeekIndex}
            boardsNum={props.boardsNum}
        />
      </div>
    </div>
  );
}

export default App;
