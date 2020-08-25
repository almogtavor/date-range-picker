import React, {useState} from "react";
import "../App.css";
import CalendarConatiner from '../containers/CalendarContainer';
import LowerFooterContainer from '../containers/LowerFooterContainer';
import HeaderContainer from '../containers/HeaderContainer';

const DateRangePicker = (props) => {
    // const [showColorPicker, setShowColorPicker] = useState(false);
    // const [viewedMonth, setViewedMonth] = useState(new Date().getMonth());
    // const [viewedYear, setViewedYear] = useState(new Date().getFullYear());
    // const [mode, setMode] = useState("Days");
  
    return (
      <div 
        className="calendar-component" 
        style={{"gridColumn": ((props.i + 1) % 3) === 0 ? 3 : (props.i + 1) % 3, "gridRow": Math.floor(props.i / 3) + 1 }}
      >
        <HeaderContainer 
          id={props.i}
          language={props.language}
        />
        <CalendarConatiner
          id={props.i}
          firstDayOfWeekIndex={props.firstDayOfWeekIndex}
          startYear={props.startYear}
          endYear={props.endYear}
        />
        <LowerFooterContainer
          id={props.i}
        />
      </div>
      );
  };
  
  export const DateRangePickerMapper = (props) => {
    return (
      <>
      {[...Array(props.boardsNum).keys()].map((i) => {
          return (
          <DateRangePicker
              key={i}
              i={i}
              language={props.language} 
              startYear={props.startYear} 
              endYear={props.endYear}
              firstDayOfWeekIndex={props.firstDayOfWeekIndex}
              boardsNum={props.boardsNum}
          />)
        })}
      </>
    );
  };