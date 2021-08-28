import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"

export { App as DateRangePicker }

// function callbackFunction(dates) {
//   console.log(`The range of dates that got picked is: ${dates.text}`)
//   console.log(`The min date that got picked is: ${dates.minDate}`)
//   console.log(`The max date that got picked is: ${dates.maxDate}`)
//   console.log(
//     `The number of days that got picked is: ${dates.numberOfDaysPicked}`
//   )
//   console.log(`All dates: ${dates.allDates}`)
// }

// ReactDOM.render(
//   <DateRangePicker
//     language="English"
//     colorsPalette="enabled"
//     format="DD-MM-YYYY"
//     selectAllButton="enabled"
//     startDate={new Date(2000, 8, 21)}
//     endDate={new Date(2024, 9, 21)}
//     firstDayOfWeekIndex={0}
//     pickMethod="range"
//     defaultColor="#178905"
//     daysAmountTab="enabled"
//     boardsNum={2}
//     callback={callbackFunction}
//   />,
//   document.getElementById("root")
// )

// serviceWorker.unregister()
