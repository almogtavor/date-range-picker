import React, { useState } from "react"
import "../../styles/CalendarHeaderStyles/chosen-dates.css"
import {
  getOpacityColorStyle,
  removeItemFromArray,
} from "../../utils/generalUtils"
import { updateViewedMonths } from "../../utils/generalUtils"
import { useLanguage } from "../../context/InitialParametersContext"
import xIcon from "../../images/x-icon.png"

export default function ChosenDatesItem(props) {
  const {
    selectedColor,
    setSelectedDays,
    datesHeaderStateDispatch,
    storedDates,
    setStoredDates,
    chosenDatesList,
    setChosenDatesList,
    boardsNum,
    chosenDates,
    index,
    isDatesDisplayHovered,
  } = props

  const language = useLanguage()
  let initialState = isDatesDisplayHovered && index === 0
  const [isXCurrentlyHovered, setIsXCurrentlyHovered] = useState(initialState)
  const [isWrapCurrentlyHovered, setIsWrapCurrentlyHovered] = useState(
    initialState
  )
  let wrapStyle = {}
  if (isWrapCurrentlyHovered) {
    wrapStyle = getOpacityColorStyle(selectedColor, 50)
  }

  const handleEnter = () => {
    setIsXCurrentlyHovered(true)
  }

  const handleLeave = () => {
    setIsXCurrentlyHovered(false)
  }

  const handleWrapEnter = () => {
    setIsWrapCurrentlyHovered(true)
  }

  const handleWrapLeave = () => {
    setIsWrapCurrentlyHovered(false)
  }

  const handleXClick = () => {
    let clearedChosenDatesList = removeItemFromArray(
      chosenDatesList,
      chosenDates
    )
    let clearedStoredDates = removeItemFromArray(
      storedDates,
      storedDates[index]
    )
    if (clearedStoredDates.length < 1) {
      setSelectedDays([])
    } else {
      setSelectedDays(clearedStoredDates[0])
      updateViewedMonths(
        boardsNum,
        language,
        datesHeaderStateDispatch,
        clearedStoredDates[0][0],
        clearedStoredDates[0][1]
      )
    }
    setChosenDatesList([...clearedChosenDatesList])
    setStoredDates([...clearedStoredDates])
  }

  const handleDatesClick = () => {
    let selectedDays = storedDates[index]
    let clearedChosenDatesList = removeItemFromArray(
      chosenDatesList,
      chosenDates
    )
    let clearedStoredDates = removeItemFromArray(storedDates, selectedDays)
    setSelectedDays(selectedDays)
    setStoredDates([selectedDays, ...clearedStoredDates])
    setChosenDatesList([chosenDates, ...clearedChosenDatesList])
    updateViewedMonths(
      boardsNum,
      language,
      datesHeaderStateDispatch,
      selectedDays[0],
      selectedDays[1]
    )
  }

  return (
    <div
      className="chosen-dates-item"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className="chosen-dates-wrap"
        onClick={handleDatesClick}
        onMouseEnter={handleWrapEnter}
        onMouseLeave={handleWrapLeave}
        style={wrapStyle}
      >
        <div className="chosen-dates-count">{index + 1}</div>
        <div key={chosenDates + index} className="chosen-dates">
          {chosenDates}
        </div>
      </div>
      {isXCurrentlyHovered && (
        <img alt="" src={xIcon} className="x-icon" onClick={handleXClick} />
      )}
    </div>
  )
}
