import React from "react";
import '../styles/month.css';
import MonthDayElementsContainer from "../containers/MonthDayElementsContainer";
import YearSelectorContainer from "../containers/YearSelectorContainer";
import MonthSelectorContainer from "../containers/MonthSelectorContainer";
import WeekDaysNamesContainer from "../containers/WeekDaysNamesContainer";


export const Calendar = (props) => {
    const {
      mode, 
      firstDayOfWeekIndex,
      id,
    } = props;

    return (
    <div className="calendar">
        <WeekDaysNamesContainer
          firstDayOfWeekIndex={firstDayOfWeekIndex}
        />
        <MonthDayElementsContainer 
          id={id}
        />
        {mode === "Months" ? (
          <MonthSelectorContainer
          id={id}
          />
        ) : mode === "Years" && 
          <YearSelectorContainer
            id={id}
          />
        }
    </div>)
}