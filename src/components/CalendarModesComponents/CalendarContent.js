import React from "react";
import '../..//styles/calendar-component.css';

import MonthDayElementsContainer from "../../containers/DayElementsContainers/DaysGridContainer";
import YearSelectorContainer from "../../containers/CalendarModesContainers/YearSelectorContainer";
import MonthSelectorContainer from "../../containers/CalendarModesContainers/MonthSelectorContainer";
import { WeekDaysNames } from "./WeekDaysNames";
import { useLanguage } from "../../context/InitialParametersContext";
import { DaysGrid } from "../DayElementsComponents/DaysGrid";
import { MonthSelector } from "./MonthSelector";
import { YearSelector } from "./YearSelector";


export const CalendarContent = (props) => {
    const {
      lowerfooterState,
      lowerfooterStateDispatch,
      dayElementsState,
      dayElementsStateDispatch,
      calendarModesState,
      calendarModesStateDispatch,
      daysAmountState,
      daysAmountStateDispatch,
      datesHeaderState,
      datesHeaderStateDispatch,
      calendarHeaderState,
      calendarHeaderStateDispatch,
      generalState,
      datesHeaderState,
      nearViewedMonths,
      setMode,
      mode, 
      id,
    } = props;

    const language = useLanguage();

    return (
    <div className="month-grid">
        <WeekDaysNames/>
        <DaysGrid 
          lowerfooterState={lowerfooterState}
          dayElementsState={dayElementsState}
          dayElementsStateDispatch={dayElementsStateDispatch}
          datesHeaderState={datesHeaderState}
          datesHeaderStateDispatch={datesHeaderStateDispatch}
          nearViewedMonths={nearViewedMonths}
          generalState={generalState}
          id={id}
        />
        {mode === "Months" ? (
          <MonthSelector
            lowerfooterState={lowerfooterState}
            dayElementsState={dayElementsState}
            calendarModesStateDispatch={calendarModesStateDispatch}
            datesHeaderState={datesHeaderState}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            nearViewedMonths={nearViewedMonths}
            id={id}
          />
        ) : mode === "Years" && 
          <YearSelector
            id={id}
            language={language}
            setMode={setMode}
          />
        }
    </div>)
}