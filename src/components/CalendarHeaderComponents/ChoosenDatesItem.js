import React, { useState } from "react"
import "../../styles/CalendarHeaderStyles/choosen-dates.css"
import {
  getOpacityColorStyle,
  removeItemFromArray,
} from "../../utils/generalUtils"
import { updateViewedMonths } from "../../utils/generalUtils"
import { useLanguage } from "../../context/InitialParametersContext"

const xIcon = require("../../images/x-icon.png")

export default function ChoosenDatesItem(props) {
  const {
    selectedColor,
    setSelectedDays,
    datesHeaderStateDispatch,
    storedDates,
    setStoredDates,
    choosenDatesList,
    setChoosenDatesList,
    boardsNum,
    choosenDates,
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
    let clearedChoosenDatesList = removeItemFromArray(
      choosenDatesList,
      choosenDates
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
    setChoosenDatesList([...clearedChoosenDatesList])
    setStoredDates([...clearedStoredDates])
  }

  const handleDatesClick = () => {
    let selectedDays = storedDates[index]
    let clearedChoosenDatesList = removeItemFromArray(
      choosenDatesList,
      choosenDates
    )
    let clearedStoredDates = removeItemFromArray(storedDates, selectedDays)
    setSelectedDays(selectedDays)
    setStoredDates([selectedDays, ...clearedStoredDates])
    setChoosenDatesList([choosenDates, ...clearedChoosenDatesList])
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
      className="choosen-dates-item"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className="choosen-dates-wrap"
        onClick={handleDatesClick}
        onMouseEnter={handleWrapEnter}
        onMouseLeave={handleWrapLeave}
        style={wrapStyle}
      >
        <div className="choosen-dates-count">{index + 1}</div>
        <div key={choosenDates + index} className="choosen-dates">
          {choosenDates}
        </div>
      </div>
      {isXCurrentlyHovered && (
        <img alt="" src={xIcon} className="x-icon" onClick={handleXClick} />
      )}
    </div>
  )
}
