import React, { useState } from "react"
import "./App.css"
import "./styles/button.css"
import "./styles/date-range-picker-component.css"
import { InitialParametersProvider } from "./context/InitialParametersContext"
import { Button } from "./components/Button"
import { CalendarComponent } from "./components/CalendarComponent"

export function App(props) {
  const {
    callback,
    boardsNum: propsBoardsNum,
    startDate,
    endDate,
    defaultColor,
  } = props

  let boardsNumInitialState = propsBoardsNum
  if (!propsBoardsNum) {
    boardsNumInitialState = 2
  }
  const [boardsNum] = useState(boardsNumInitialState)
  const [showCalendar, setShowCalendar] = useState(false)
  const [buttonDatesText, setButtonDatesText] = useState(null)

  return (
    <div className="App">
      <InitialParametersProvider props={props}>
        <Button
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          buttonDatesText={buttonDatesText}
        />
        <CalendarComponent
          callback={callback}
          boardsNum={boardsNum}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          buttonDatesText={buttonDatesText}
          setButtonDatesText={setButtonDatesText}
          startDate={startDate}
          endDate={endDate}
          defaultColor={defaultColor}
        />
      </InitialParametersProvider>
    </div>
  )
}
