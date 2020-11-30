import React from "react";
import '../..//styles/calendar-component.css';
import { WeekDaysNames } from "./WeekDaysNames";
import { useLanguage } from "../../context/InitialParametersContext";
import { DaysGrid } from "../DayElementsComponents/DaysGrid";
import { MonthSelector } from "./MonthSelector";
import { YearSelector } from "./YearSelector";


export const CalendarContent = (props) => {
    const {
      lowerfooterState,
      dayElementsState,
      dayElementsStateDispatch,
      calendarModesStateDispatch,
      datesHeaderStateDispatch,
      generalState,
      datesHeaderState,
      nearViewedMonths,
      mode, 
      id,
    } = props;

    // const language = useLanguage();

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
            nearViewedMonthsfunction={nearViewedMonths}
            generalState={generalState}
            id={id}
          />
        ) : mode === "Years" && 
          <YearSelector
            lowerfooterState={lowerfooterState}
            dayElementsState={dayElementsState}
            calendarModesStateDispatch={calendarModesStateDispatch}
            datesHeaderState={datesHeaderState}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            nearViewedMonthsfunction={nearViewedMonths}
            id={id}
          />
        }
    </div>)
}