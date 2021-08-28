import React from "react"
import "../../styles/calendar-component.css"
import { WeekDaysNames } from "./WeekDaysNames"
import { DaysGrid } from "../DayElementsComponents/DaysGrid"
import { MonthSelector } from "./MonthSelector"
import { YearSelector } from "./YearSelector"

export const CalendarContent = (props) => {
  const {
    selectedColor,
    selectedDays,
    hoveredDay,
    setSelectedDays,
    setHoveredDay,
    calendarModesState,
    calendarModesStateDispatch,
    datesHeaderStateDispatch,
    boardsNum,
    datesHeaderState,
    nearViewedMonths,
    id,
  } = props

  const mode = calendarModesState.mode[id]

  return (
    <div className="month-grid">
      <WeekDaysNames />
      <DaysGrid
        selectedColor={selectedColor}
        selectedDays={selectedDays}
        hoveredDay={hoveredDay}
        setSelectedDays={setSelectedDays}
        setHoveredDay={setHoveredDay}
        datesHeaderState={datesHeaderState}
        datesHeaderStateDispatch={datesHeaderStateDispatch}
        nearViewedMonths={nearViewedMonths}
        boardsNum={boardsNum}
        id={id}
      />
      {mode === "Months" ? (
        <MonthSelector
          selectedColor={selectedColor}
          selectedDays={selectedDays}
          calendarModesStateDispatch={calendarModesStateDispatch}
          datesHeaderState={datesHeaderState}
          datesHeaderStateDispatch={datesHeaderStateDispatch}
          nearViewedMonthsfunction={nearViewedMonths}
          boardsNum={boardsNum}
          id={id}
        />
      ) : (
        mode === "Years" && (
          <YearSelector
            selectedColor={selectedColor}
            selectedDays={selectedDays}
            calendarModesStateDispatch={calendarModesStateDispatch}
            datesHeaderState={datesHeaderState}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            boardsNum={boardsNum}
            nearViewedMonthsfunction={nearViewedMonths}
            id={id}
          />
        )
      )}
    </div>
  )
}
