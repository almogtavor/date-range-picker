import React from "react";
import '../../styles/CalendarContentStyles/month.css';
import '../..//styles/calendar-component.css';
import MonthDayElementsContainer from "../../containers/DayElementsContainers/MonthDayElementsContainer";
import YearSelectorContainer from "../../containers/CalendarContentContainers/YearSelectorContainer";
import MonthSelectorContainer from "../../containers/CalendarContentContainers/MonthSelectorContainer";
import { WeekDaysNames } from "./WeekDaysNames";
import { useLanguage } from "../../context/InitialParametersContext";


export const CalendarContent = (props) => {
    const {
      mode, 
      id,
    } = props;

    const language = useLanguage();

    return (
    <div className="calendar">
        <WeekDaysNames/>
        <MonthDayElementsContainer 
          id={id}
        />
        {mode === "Months" ? (
          <MonthSelectorContainer
            id={id}
            language={language}
          />
        ) : mode === "Years" && 
          <YearSelectorContainer
            id={id}
            language={language}
          />
        }
    </div>)
}