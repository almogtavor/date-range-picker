import React from "react";
import '../styles/month.css';
import '../styles/calendar-component.css';
import MonthDayElementsContainer from "../containers/MonthDayElementsContainer";
import YearSelectorContainer from "../containers/YearSelectorContainer";
import MonthSelectorContainer from "../containers/MonthSelectorContainer";
import WeekDaysNamesContainer from "../containers/WeekDaysNamesContainer";
import { useFirstDayOfWeekIndex } from "../context/InitialParametersContext";


export const Calendar = (props) => {
    const {
      mode, 
      id,
    } = props;

    const firstDayOfWeekIndex = useFirstDayOfWeekIndex();

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