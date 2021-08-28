import React from "react"
import "../../styles/CalendarModesStyles/year-selector.css"
import {
  useStartDate,
  useEndDate,
} from "../../context/InitialParametersContext"
import { selectorsModeStyle } from "../../utils/generalUtils"
import { setMode, setViewedYear } from "../../actions"

export const YearSelector = (props) => {
  const {
    selectedColor,
    datesHeaderState,
    selectedDays,
    calendarModesStateDispatch,
    datesHeaderStateDispatch,
    boardsNum,
    nearViewedMonthsfunction,
    id,
  } = props

  const viewedMonth = datesHeaderState.viewedMonth[id]
  const viewedYear = datesHeaderState.viewedYear[id]
  const nearViewedMonths = nearViewedMonthsfunction(id)
  const startDate = useStartDate()
  const endDate = useEndDate()

  let yearsArray = []
  for (let i = endDate.getFullYear(); i > startDate.getFullYear() - 1; i--) {
    yearsArray.push(i)
  }

  const selectYearHandler = (year, validYear) => () => {
    if (validYear) {
      calendarModesStateDispatch(setMode(boardsNum, id, "Days"))
      datesHeaderStateDispatch(setViewedYear(boardsNum, id, year))
    }
  }

  return (
    <div className="year-selector">
      {yearsArray.map((year) => {
        let validYear = getValidYear(
          nearViewedMonths,
          year,
          viewedMonth,
          endDate,
          startDate
        )
        let selectedYear = getSelectedYear(selectedDays, year)
        let style = selectorsModeStyle(
          year,
          viewedYear,
          selectedYear,
          selectedColor
        )
        const className = `selectable-year ${!validYear && "invalid"}`

        return (
          <div
            key={year}
            onClick={selectYearHandler(year, validYear)}
            className={className}
            style={style}
          >
            {year}
          </div>
        )
      })}
    </div>
  )
}

function getValidYear(nearViewedMonths, year, viewedMonth, endDate, startDate) {
  let validYear = true
  if (nearViewedMonths.right.year) {
    if (
      new Date(year, viewedMonth, 0) >=
      new Date(nearViewedMonths.right.year, nearViewedMonths.right.month, 0)
    ) {
      validYear = false
    }
  }
  if (nearViewedMonths.left.year) {
    if (
      new Date(year, viewedMonth, 0) <=
      new Date(nearViewedMonths.left.year, nearViewedMonths.left.month, 0)
    ) {
      validYear = false
    }
  }
  if (
    new Date(year, viewedMonth, 0) >
    new Date(endDate.getFullYear(), endDate.getMonth(), 0)
  ) {
    validYear = false
  }
  if (
    new Date(year, viewedMonth, 0) <
    new Date(startDate.getFullYear(), startDate.getMonth(), 0)
  ) {
    validYear = false
  }
  return validYear
}

function getSelectedYear(selectedDays, year) {
  let selectedYear = false
  if (selectedDays.length === 2) {
    if (selectedDays[0] > selectedDays[1]) {
      if (
        selectedDays[0].getFullYear() >= year &&
        selectedDays[1].getFullYear() <= year
      ) {
        selectedYear = true
      }
    } else {
      if (
        selectedDays[0].getFullYear() <= year &&
        selectedDays[1].getFullYear() >= year
      ) {
        selectedYear = true
      }
    }
  }
  return selectedYear
}
