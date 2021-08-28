import React from "react"
import { calendarConfig } from "../../configuration/config"
import "../../styles/DatesHeaderStyles/dates-header.css"
import { useLanguage } from "../../context/InitialParametersContext"
import { InfoElement } from "./InfoElement"
import { Arrow } from "./Arrow"

export const DatesHeader = (props) => {
  const {
    selectedColor,
    calendarModesStateDispatch,
    datesHeaderState,
    datesHeaderStateDispatch,
    nearViewedMonths,
    boardsNum,
    id,
  } = props

  const viewedMonth = datesHeaderState.viewedMonth[id]
  const viewedYear = datesHeaderState.viewedYear[id]
  const language = useLanguage()
  const monthsElementValue = calendarConfig.months[language][viewedMonth]

  return (
    <div className="header" lang={language}>
      <div className="info-elements">
        <InfoElement
          element={"month"}
          value={monthsElementValue}
          changeMode={"Months"}
          selectedColor={selectedColor}
          boardsNum={boardsNum}
          calendarModesStateDispatch={calendarModesStateDispatch}
          id={id}
        />
        <InfoElement
          element={"year"}
          value={viewedYear}
          changeMode={"Years"}
          selectedColor={selectedColor}
          boardsNum={boardsNum}
          calendarModesStateDispatch={calendarModesStateDispatch}
          id={id}
        />
      </div>
      <div className="header-icons">
        <Arrow
          nearViewedMonthsfunction={nearViewedMonths}
          datesHeaderState={datesHeaderState}
          datesHeaderStateDispatch={datesHeaderStateDispatch}
          selectedColor={selectedColor}
          boardsNum={boardsNum}
          id={id}
          arrowSide={"leftArrow"}
        />
        <Arrow
          nearViewedMonthsfunction={nearViewedMonths}
          datesHeaderState={datesHeaderState}
          datesHeaderStateDispatch={datesHeaderStateDispatch}
          selectedColor={selectedColor}
          boardsNum={boardsNum}
          id={id}
          arrowSide={"rightArrow"}
        />
      </div>
    </div>
  )
}
