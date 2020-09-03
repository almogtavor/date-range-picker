import React, {useState} from "react";
import "./App.css";
import "./styles/button.css";
import DateRangePickerContainer from './containers/DateRangePickerContainer';
import ButtonContainer from "./containers/ButtonContainer";

function App(props) {
  return (
    <div className="App">
      <ButtonContainer/>

      <div className="date-range-picker-component">
        <div className="date-range-picker" style={{
          "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
          "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
        }}>
          
          <DateRangePickerContainer 
              language={props.language} 
              startDate={props.startDate} 
              endDate={props.endDate}
              firstDayOfWeekIndex={props.firstDayOfWeekIndex}
              boardsNum={props.boardsNum}
              colorsPalette={props.colorsPalette}
          />
          </div>
        </div>
    </div>
  );
}

export default App;
