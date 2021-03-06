import React from "react"
import "../../styles/CalendarHeaderStyles/calendar-header.css"
import {
  chosenDatesCalculation,
  calculateDaysCount,
  removeItemFromArray,
  getOpacityColorStyle,
} from "../../utils/generalUtils"
import {
  useFormat,
  useLanguage,
  usePickMethod,
} from "../../context/InitialParametersContext"
import { updateViewedMonths } from "../../utils/generalUtils"
import DatesDisplay from "./DatesDisplay"

export const CalendarHeader = (props) => {
  const {
    selectedColor,
    hoveredDay,
    selectedDays,
    setSelectedDays,
    datesHeaderStateDispatch,
    storedDates,
    setStoredDates,
    chosenDatesList,
    setChosenDatesList,
    boardsNum,
  } = props

  const language = useLanguage()
  const format = useFormat()
  const pickMethod = usePickMethod()
  const clearButtonClassName = "clear"
  const clearStyle = { color: selectedColor }
  const widthPercentage = boardsNum * 100 > 300 ? 300 : boardsNum * 100

  let clearButtonText = "Clear"
  if (language === "Hebrew") {
    clearButtonText = "נקה"
  }
  const templateStyle = { width: widthPercentage + "%" }
  const selectedDaysStyle = getOpacityColorStyle(selectedColor, 60)

  // language not included in funciton call because of the css ltr property of hebrew case
  let chosenDates = chosenDatesCalculation(
    selectedDays,
    hoveredDay,
    format,
    pickMethod
  )
  chosenDates = addDatesCount(
    pickMethod,
    selectedDays,
    chosenDates,
    language,
    hoveredDay
  )

  const handleClearClick = () => {
    if (pickMethod === "ranges") {
      let clearedChosenDatesList = removeItemFromArray(
        chosenDatesList,
        chosenDates
      )
      let clearedStoredDates = removeItemFromArray(storedDates, selectedDays)
      setChosenDatesList([...clearedChosenDatesList])
      setStoredDates([...clearedStoredDates])
      if (storedDates.length < 1) {
        setSelectedDays([])
      } else {
        setSelectedDays(storedDates[0])
        updateViewedMonths(
          boardsNum,
          language,
          datesHeaderStateDispatch,
          storedDates[0][0],
          storedDates[0][1]
        )
      }
    } else {
      setSelectedDays([])
    }
  }

  return (
    <div className="calendar-header-template" style={templateStyle}>
      <div className="calendar-header-background" style={selectedDaysStyle}>
        <div className="calendar-header-elements-wrap" lang={language}>
          <DatesDisplay
            selectedColor={selectedColor}
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            storedDates={storedDates}
            setStoredDates={setStoredDates}
            chosenDatesList={chosenDatesList}
            setChosenDatesList={setChosenDatesList}
            boardsNum={boardsNum}
            chosenDates={chosenDates}
            selectedDaysStyle={selectedDaysStyle}
          />
          <button
            className={clearButtonClassName}
            lang={language}
            onClick={handleClearClick}
            style={clearStyle}
          >
            {clearButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}

function addDatesCount(
  pickMethod,
  selectedDays,
  chosenDates,
  language,
  hoveredDay
) {
  if (pickMethod !== "date") {
    if (selectedDays.length === 2) {
      chosenDates += calculateDaysCount(
        selectedDays[0],
        selectedDays[1],
        language
      )
    } else if (hoveredDay !== null && selectedDays.length === 1) {
      chosenDates += calculateDaysCount(selectedDays[0], hoveredDay, language)
    }
  }
  return chosenDates
}

function areEqual(prevProps, nextProps) {
  return (
    prevProps.selectedDays === nextProps.selectedProps &&
    prevProps.selectedColor === nextProps.selectedColor
  )
}

export default React.memo(CalendarHeader, areEqual)
