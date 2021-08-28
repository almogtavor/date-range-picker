import React from "react"
import "../../styles/DayElementsStyles/day.css"
import "../../styles/DayElementsStyles/selected-day.css"
import {
  useLanguage,
  useEndDate,
  useStartDate,
  usePickMethod,
} from "../../context/InitialParametersContext"
import { setViewedMonth, setViewedYear } from "../../actions"
import { HoverableDayElement } from "./HoverableDayElement"

function customSetters(datesHeaderStateDispatch, language, id, boardsNum) {
  const rightId = language === "Hebrew" ? id - 1 : id + 1
  const leftId = language === "Hebrew" ? id + 1 : id - 1

  const setMonthById = (viewedMonth, id, viewedYear) => {
    let yearIncreasement = 0
    let newMonth = viewedMonth
    if (viewedMonth > 11) {
      yearIncreasement = 1
      newMonth = 0
    } else if (viewedMonth < 0) {
      yearIncreasement = -1
      newMonth = 11
    }
    datesHeaderStateDispatch(setViewedMonth(boardsNum, id, newMonth))
    datesHeaderStateDispatch(
      setViewedYear(boardsNum, id, viewedYear + yearIncreasement)
    )
  }

  return {
    setRightViewedMonth: (viewedMonth, viewedYear) =>
      setMonthById(viewedMonth, rightId, viewedYear),
    setLeftViewedMonth: (viewedMonth, viewedYear) =>
      setMonthById(viewedMonth, leftId, viewedYear),
    setViewedMonthCustom: (viewedMonth, viewedYear) =>
      setMonthById(viewedMonth, id, viewedYear),
  }
}

export const SelectableDayElement = (props) => {
  const {
    selectedColor,
    selectedDays,
    hoveredDay,
    setSelectedDays,
    setHoveredDay,
    datesHeaderStateDispatch,
    nearViewedMonths,
    boardsNum,
    date,
    id,
    isOfCurrentViewedMonth,
    dayOfWeek,
    genericStyle,
  } = props

  const startDate = useStartDate()
  const endDate = useEndDate()
  const language = useLanguage()

  const rightViewedMonth = nearViewedMonths(id).right.month
  const rightViewedYear = nearViewedMonths(id).right.year
  const leftViewedMonth = nearViewedMonths(id).left.month
  const leftViewedYear = nearViewedMonths(id).left.year

  const month = date.getMonth()
  const year = date.getFullYear()
  const pickMethod = usePickMethod()
  const isToday =
    date.toLocaleDateString() === new Date().toLocaleDateString() ? true : false
  const isDisabled = date < startDate || date > endDate
  let isSelected = false

  const {
    setViewedMonthCustom,
    setRightViewedMonth,
    setLeftViewedMonth,
  } = customSetters(datesHeaderStateDispatch, language, id, boardsNum)

  selectedDays.forEach((element) => {
    if (
      date.toLocaleDateString() === element.toLocaleDateString() &&
      !isSelected
    ) {
      isSelected = true
    }
  })

  const nonCurrentDateClick = () => {
    let isNonCurrentCase
    if (
      (pickMethod !== "date" && selectedDays.length !== 1) ||
      pickMethod === "date"
    ) {
      isNonCurrentCase = true
    }
    if (!isOfCurrentViewedMonth && isNonCurrentCase) {
      setViewedMonthCustom(date.getMonth(), date.getFullYear())
      if (rightViewedYear === year && rightViewedMonth === month) {
        setRightViewedMonth(rightViewedMonth + 1, rightViewedYear)
      } else if (leftViewedYear === year && leftViewedMonth === month) {
        setLeftViewedMonth(leftViewedMonth - 1, leftViewedYear)
      }
    }
  }

  const setMonthsOnLeftClick = (rightMonth, rightYear, leftMonth, leftYear) => {
    setRightViewedMonth(rightMonth, rightYear)
    setViewedMonthCustom(leftMonth, leftYear)
  }

  const setMonthsOnRightClick = (
    rightMonth,
    rightYear,
    leftMonth,
    leftYear
  ) => {
    setViewedMonthCustom(rightMonth, rightYear)
    setLeftViewedMonth(leftMonth, leftYear)
  }

  const rangeSelectionHandling = () => {
    const currentDate = new Date(year, month, 1)

    if (currentDate < endDate && boardsNum === 2) {
      if (selectedDays.length === 1) {
        const firstSelectMonth = selectedDays[0].getMonth()
        const firstSelectYear = selectedDays[0].getFullYear()
        const firstSelectDate = new Date(firstSelectYear, firstSelectMonth, 1)
        let { rightId, leftId } = { rightId: 1, leftId: 0 }
        if (language === "Hebrew") {
          rightId = 0
          leftId = 1
        }

        if (id === leftId) {
          if (currentDate > firstSelectDate) {
            setMonthsOnLeftClick(month, year, firstSelectMonth, firstSelectYear)
          } else if (currentDate < firstSelectDate) {
            setMonthsOnLeftClick(firstSelectMonth, firstSelectYear, month, year)
          }
        } else if (id === rightId) {
          if (currentDate > firstSelectDate) {
            setMonthsOnRightClick(
              month,
              year,
              firstSelectMonth,
              firstSelectYear
            )
          } else if (
            currentDate.toLocaleDateString() ===
            firstSelectDate.toLocaleDateString()
          ) {
            setMonthsOnRightClick(month + 1, year, month, year)
          } else {
            setMonthsOnRightClick(
              firstSelectMonth,
              firstSelectYear,
              month,
              year
            )
          }
        }
      }
    }
  }

  const handleClick = () => {
    if (!isDisabled) {
      isSelected = !isSelected
      nonCurrentDateClick()
      if (pickMethod !== "date") {
        if (selectedDays.length === 2 || selectedDays.length === 0) {
          setSelectedDays([date])
        } else {
          if (selectedDays[0] > date) {
            setSelectedDays([date, selectedDays[0]])
          } else {
            setSelectedDays([selectedDays[0], date])
          }
        }
        rangeSelectionHandling()
      } else {
        setSelectedDays([date])
      }
    }
  }

  let className = "day-element"
  let style = genericStyle
  if (!isOfCurrentViewedMonth) {
    className += " non-current"
  }
  if (isDisabled) {
    className += " disabled"
  }
  if (isToday) {
    className += " today"
  }
  if (isSelected) {
    style = {
      ...genericStyle,
      background: selectedColor,
      borderColor: selectedColor,
    }
    className += " selected-day"
  }
  if (isSelected && isOfCurrentViewedMonth) {
    className += " enabled"
  }

  return (
    <div className={className} style={style} onClick={handleClick}>
      <HoverableDayElement
        selectedDays={selectedDays}
        hoveredDay={hoveredDay}
        setHoveredDay={setHoveredDay}
        selectedColor={selectedColor}
        date={date}
        dayOfWeek={dayOfWeek}
      />
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return (
    prevProps.selectedDays === nextProps.selectedDays &&
    prevProps.selectedColor === nextProps.selectedColor &&
    prevProps.genericStyle === nextProps.genericStyle
  )
}

export default React.memo(SelectableDayElement, areEqual)
