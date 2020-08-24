import React from "react";
import "./App.css";
import CalendarConatiner from './containers/CalendarContainer';
import LowerFooterContainer from './containers/LowerFooterContainer';
import HeaderContainer from './containers/HeaderContainer';

const DateRangePickerComponents = (props) => {
  return (
    <>
    {[...Array(props.boardsNum).keys()].map((i) => {
      return (
        <div 
          key={i}
          className="calendar-component" 
          style={{"gridColumn": ((i + 1) % 3) === 0 ? 3 : (i + 1) % 3, "gridRow": Math.floor(i / 3) + 1 }}
        >
          <HeaderContainer 
            language={props.language}
          />
          <CalendarConatiner
            firstDayOfWeekIndex={props.firstDayOfWeekIndex}
            startYear={props.startYear}
            endYear={props.endYear}
          />
          <LowerFooterContainer/>
        </div>
        );
      })}
    </>
  );
};

function DateRangePicker(props) {
  console.log(props);
  return (
    <div className="App">
      <div className="date-range-picker" style={{
        "height": `${Math.floor(props.boardsNum / 3) * 292}px`,
        "gridTemplateRows": `repeat(${Math.floor(props.boardsNum / 3)}, 1fr)`,
      }}>
        <DateRangePickerComponents 
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

export default DateRangePicker;
