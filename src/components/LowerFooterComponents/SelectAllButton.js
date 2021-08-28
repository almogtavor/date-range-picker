import React, { useState, useEffect, useRef } from "react"
import "../../styles/LowerFooterStyles/select-all-button.css"
import {
  useLanguage,
  useEndDate,
  useStartDate,
  useSelectAllButton,
} from "../../context/InitialParametersContext"
import checkbox from "../../images/checkbox.png"
import hoverCheckbox from "../../images/hover-checkbox.png"
import clickedCheckbox from "../../images/clicked-checkbox.png"

function limitDate(
  mode,
  nearViewedMonths,
  checkedCalendarSide,
  dateOfCurrentMonth,
  fixedLimitDate,
  dateOfYear,
  dateOfNearMonth,
  customDateOfNearMonth
) {
  let selectDate,
    limitBlocks = false

  if (!customDateOfNearMonth) {
    customDateOfNearMonth = dateOfNearMonth
  }
  if (
    (checkedCalendarSide === "left" && dateOfCurrentMonth > fixedLimitDate) ||
    (checkedCalendarSide === "right" && dateOfCurrentMonth < fixedLimitDate)
  ) {
    limitBlocks = true
  }

  if (
    nearViewedMonths[checkedCalendarSide].year ||
    (limitBlocks && mode === "Days")
  ) {
    if (mode === "Months") {
      if (
        (checkedCalendarSide === "left" && dateOfYear < dateOfNearMonth) ||
        (checkedCalendarSide === "right" && dateOfYear > dateOfNearMonth)
      ) {
        selectDate = customDateOfNearMonth
      } else {
        selectDate = dateOfYear
      }
    } else if (mode === "Days") {
      selectDate = dateOfCurrentMonth
    } else {
      selectDate = customDateOfNearMonth
    }
  } else {
    if (
      mode === "Months" &&
      !(
        (checkedCalendarSide === "left" && fixedLimitDate > dateOfYear) ||
        (checkedCalendarSide === "right" && fixedLimitDate < dateOfYear)
      )
    ) {
      selectDate = dateOfYear
    } else {
      selectDate = fixedLimitDate
    }
  }
  return selectDate
}

export const SelectAllButton = (props) => {
  const {
    selectedDays,
    setSelectedDays,
    setHoveredDay,
    calendarModesState,
    datesHeaderState,
    nearViewedMonthsFunction,
    id,
  } = props

  const mode = calendarModesState.mode[id]
  const viewedMonth = datesHeaderState.viewedMonth[id]
  const viewedYear = datesHeaderState.viewedYear[id]
  const nearViewedMonths = nearViewedMonthsFunction(id)
  const startDate = useStartDate()
  const endDate = useEndDate()
  const language = useLanguage()
  const selectAllButton = useSelectAllButton()
  const [checkboxSrc, setCheckboxSrc] = useState(checkbox)
  const checkboxChanged = useRef(false)

  let text = "Select All"
  if (language === "Hebrew") {
    text = "בחר הכל"
  }

  function getLimits() {
    let startSelectDate, endSelectDate

    const startOfYear = new Date(viewedYear, 0, 1)
    const startOfCurrentMonth = new Date(viewedYear, viewedMonth, 1)
    const startOfLeftMonthNext = new Date(
      nearViewedMonths.left.year,
      nearViewedMonths.left.month + 1,
      1
    )
    const startOfLeftMonth = new Date(
      nearViewedMonths.left.year,
      nearViewedMonths.left.month,
      1
    )

    const endOfYear = new Date(viewedYear, 12, 0)
    const endOfCurrentMonth = new Date(viewedYear, viewedMonth + 1, 0)
    const endOfRightMonth = new Date(
      nearViewedMonths.right.year,
      nearViewedMonths.right.month,
      0
    )

    startSelectDate = limitDate(
      mode,
      nearViewedMonths,
      "left",
      startOfCurrentMonth,
      startDate,
      startOfYear,
      startOfLeftMonth,
      startOfLeftMonthNext
    )

    endSelectDate = limitDate(
      mode,
      nearViewedMonths,
      "right",
      endOfCurrentMonth,
      endDate,
      endOfYear,
      endOfRightMonth
    )

    return [startSelectDate, endSelectDate]
  }

  const handleSelectAllClick = () => {
    if (checkboxSrc !== clickedCheckbox) {
      setCheckboxSrc(clickedCheckbox)
      setHoveredDay(null)
      checkboxChanged.current = true
      const [startSelectDate, endSelectDate] = getLimits()
      setSelectedDays([startSelectDate, endSelectDate])
    } else {
      setCheckboxSrc(hoverCheckbox)
      setSelectedDays([])
    }
  }

  useEffect(() => {
    if (selectAllButton === "enabled") {
      setCheckboxSrc(checkbox)
    }
  }, [mode, selectAllButton])

  useEffect(() => {
    if (checkboxChanged.current === false) {
      setCheckboxSrc(checkbox)
    } else {
      checkboxChanged.current = false
    }
  }, [selectedDays])

  const handleHover = (src) => () => {
    if (checkboxSrc !== clickedCheckbox) {
      setCheckboxSrc(src)
    }
  }

  return (
    <>
      {selectAllButton === "enabled" && (
        <div
          className="checkbox-div"
          onClick={handleSelectAllClick}
          onMouseEnter={handleHover(hoverCheckbox)}
          onMouseLeave={handleHover(checkbox)}
        >
          <img className="checkbox" alt="" src={checkboxSrc} />
          <div className="select-all-text">{text}</div>
        </div>
      )}
    </>
  )
}
