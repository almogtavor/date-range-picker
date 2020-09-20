import React, { Profiler } from "react";
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

    
    function clockPerformance(profilerId, mode, actualTime, baseTime, startTime, commitTime) {
      console.log({profilerId, mode, actualTime, baseTime, startTime, commitTime});
  }
    return (
    <div className="calendar">
        <WeekDaysNames/>
        <MonthDayElementsContainer 
          id={id}
        />
        {mode === "Months" ? (
          <Profiler id="test" onRender={clockPerformance}>
            <MonthSelectorContainer
              id={id}
              language={language}
            />
          </Profiler>
        ) : mode === "Years" && 
          <YearSelectorContainer
            id={id}
            language={language}
          />
        }
    </div>)
}