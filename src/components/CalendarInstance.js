import React from "react";
import "../App.css";
import CalendarContentContainer from '../containers/CalendarContentContainer';
import LowerFooterContainer from '../containers/LowerFooterContainer';
import DatesHeaderContainer from '../containers/DatesHeaderContainer';

export const CalendarInstance = (props) => {
    const {
      i,
    } = props;

    return (
      <div 
        className="calendar-component" 
        style={{
          "gridColumn": ((i + 1) % 3) === 0 ? 
            3 : 
            (i + 1) % 3,
          "gridRow": Math.floor(i / 3) + 1 ,
        }}
      >
        <DatesHeaderContainer 
          id={i}
        />
        <CalendarContentContainer
          id={i}
        />
        <LowerFooterContainer
          id={i}
        />
      </div>
      );
  };