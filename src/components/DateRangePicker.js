import React from "react";
import "../App.css";
import CalendarConatiner from '../containers/CalendarContainer';
import LowerFooterContainer from '../containers/LowerFooterContainer';
import HeaderContainer from '../containers/HeaderContainer';

export const DateRangePicker = (props) => {
    return (
      <div 
        className="calendar-component" 
        style={{
          "gridColumn": ((props.i + 1) % 3) === 0 ? 
            3 : 
            (props.i + 1) % 3, 
          "gridRow": Math.floor(props.i / 3) + 1 
        }}
      >
        <HeaderContainer 
          id={props.i}
          startYear={props.startYear}
          endYear={props.endYear}
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