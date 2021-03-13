import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import DateRangePicker from "./App"
import * as serviceWorker from "./serviceWorker"

function callbackFunction(dates) {
  console.log(`The range of dates that got picked is: ${dates.text}`)
  console.log(`The min date that got picked is: ${dates.minDate}`)
  console.log(`The max date that got picked is: ${dates.maxDate}`)
  console.log(
    `The number of days that got picked is: ${dates.numberOfDaysPicked}`
  )
  console.log(`All dates: ${dates.allDates}`)
}

ReactDOM.render(
  <>
    {/* <div
        className="sub-title"
        href="https://github.com/almogtavor/date-range-picker" 
    >
            Star
    </div> */}
    <h1 className="title">Date Range Picker Component</h1>

    <div className="sub-title">Simple date picker</div>
    <DateRangePicker
      language="English"
      colorsPalette="enabled"
      format="DD-MM-YYYY"
      selectAllButton="disabled"
      startDate={new Date(2000, 8, 21)}
      endDate={new Date(2024, 9, 21)}
      firstDayOfWeekIndex={0}
      pickMethod="date"
      defaultColor="#178905"
      daysAmountTab="disabled"
      boardsNum={1}
      callback={callbackFunction}
    />
    <div className="sub-title">Range picker (default values)</div>
    <DateRangePicker callback={callbackFunction} />
    <div className="sub-title">Multiple ranges picker</div>
    <DateRangePicker
      selectAllButton="enabled"
      pickMethod="ranges"
      callback={callbackFunction}
    />
    <div className="sub-title">
      Hebrew version (right to left). All features enabled with ranges pick
      method
    </div>
    <DateRangePicker
      language="Hebrew"
      colorsPalette="enabled"
      format="DD-MM-YYYY"
      selectAllButton="enabled"
      startDate={new Date(2000, 8, 21)}
      endDate={new Date(2024, 9, 21)}
      firstDayOfWeekIndex={0}
      pickMethod="ranges"
      defaultColor="#178905"
      daysAmountTab="enabled"
      boardsNum={2}
      callback={callbackFunction}
    />
  </>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
