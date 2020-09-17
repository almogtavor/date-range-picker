import React from "react";
import '../styles/month.css';
import '../styles/calendar-component.css';
import MonthDayElementsContainer from "../containers/MonthDayElementsContainer";
import YearSelectorContainer from "../containers/YearSelectorContainer";
import MonthSelectorContainer from "../containers/MonthSelectorContainer";
import WeekDaysNamesContainer from "../containers/WeekDaysNamesContainer";
import { useLanguage } from "../context/InitialParametersContext";


export const CalendarContent = (props) => {
    const {
      mode, 
      id,
    } = props;

    const language = useLanguage();

    return (
    <div className="calendar">
        <WeekDaysNamesContainer/>
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