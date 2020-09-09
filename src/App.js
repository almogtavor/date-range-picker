import React from "react";
import "./App.css";
import "./styles/button.css";
import DateRangePickerContainer from './containers/DateRangePickerContainer';
import ButtonContainer from "./containers/ButtonContainer";

function App(props) {
  const {
    language,
    startDate,
    endDate,
    firstDayOfWeekIndex,
    boardsNum,
    colorsPalette,
    format,
    selectAllButton,
  } = props;


  console.log(selectAllButton);
  return (
    <div className="App">
      {/* <h1>Date Range Picker Example</h1> */}
      <ButtonContainer/>

      <div className="date-range-picker-component">
        <div 
          className="date-range-picker" 
          style={{
          "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
          "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,}}
          onMouseDown={console.log("ejaifjaifeaofj")}
        >
          <DateRangePickerContainer 
              language={language} 
              startDate={startDate} 
              endDate={endDate}
              firstDayOfWeekIndex={firstDayOfWeekIndex}
              boardsNum={boardsNum}
              colorsPalette={colorsPalette}
              format={format}
              selectAllButon={selectAllButton}
          />
          </div>
        </div>
    </div>
  );
}

export default App;
