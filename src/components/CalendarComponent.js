import React from "react"
import { Mapper } from "./Mapper"

export function CalendarComponent(props) {
  const {
    startDate,
    endDate,
    defaultColor,
    boardsNum,
    buttonDatesText,
    showCalendar,
    setShowCalendar,
    setButtonDatesText,
    callback,
  } = props

  const style = {
    height: `${Math.floor(boardsNum / 3) * 292}px`,
    gridTemplateRows: `repeat(${Math.floor(boardsNum / 3)}, 1fr)`,
  }

  return (
    <div className="date-range-picker-component">
      <div className="date-range-picker" style={style}>
        <Mapper
          startDate={startDate}
          endDate={endDate}
          defaultColor={defaultColor}
          boardsNum={boardsNum}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          buttonDatesText={buttonDatesText}
          setButtonDatesText={setButtonDatesText}
          callback={callback}
        />
      </div>
    </div>
  )
}
