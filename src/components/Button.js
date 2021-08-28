import React from "react"
import "../styles/button.css"
import {
  useFormat,
  usePickMethod,
  useLanguage,
} from "../context/InitialParametersContext"
import { chosenDatesCalculation } from "../utils/generalUtils"
import calendarIcon from "../images/calendar-icon6.png"

export const Button = (props) => {
  const { setShowCalendar, showCalendar, buttonDatesText } = props

  const language = useLanguage()
  const format = useFormat()
  const pickMethod = usePickMethod()
  const formatPattern = chosenDatesCalculation(
    [],
    null,
    format,
    pickMethod,
    language
  )
  let text = buttonDatesText
  if (!text) {
    text = formatPattern
  }

  const handleClick = () => {
    setShowCalendar(!showCalendar)
  }

  return (
    <>
      <button className="button" onClick={handleClick}>
        {text}
        <img alt="" src={calendarIcon} className="calendar-icon" />
      </button>
    </>
  )
}
