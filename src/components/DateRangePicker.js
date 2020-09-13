import React from "react";
import "../App.css";
import CalendarConatiner from '../containers/CalendarContainer';
import LowerFooterContainer from '../containers/LowerFooterContainer';
import DatesHeaderContainer from '../containers/DatesHeaderContainer';
import { useStartDate, useEndDate, useFirstDayOfWeekIndex } from "../context/InitialParametersContext";

export const DateRangePicker = (props) => {
    const {
      i,
    } = props;

    const startDate = useStartDate();
    const endDate = useEndDate();
    const firstDayOfWeekIndex = useFirstDayOfWeekIndex();

    return (
      <div 
        className="calendar-component" 
        style={{
          "gridColumn": ((i + 1) % 3) === 0 ? 
            3 : 
            (i + 1) % 3, 
          "gridRow": Math.floor(i / 3) + 1 
        }}
      >
        <DatesHeaderContainer 
          id={i}
          startDate={startDate}
          endDate={endDate}
        />
        <CalendarConatiner
          id={i}
          firstDayOfWeekIndex={firstDayOfWeekIndex}
          startDate={startDate}
          endDate={endDate}
        />
        <LowerFooterContainer
          id={i}
        />
      </div>
      );
  };