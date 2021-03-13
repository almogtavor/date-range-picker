import React from "react"
import "../../styles/CalendarModesStyles/week.css"
import { calendarConfig } from "../../configuration/config"
import {
  useFirstDayOfWeekIndex,
  useLanguage,
} from "../../context/InitialParametersContext"

export const WeekDaysNames = () => {
  const firstDayOfWeekIndex = useFirstDayOfWeekIndex()
  const language = useLanguage()

  let weekdays = calendarConfig.weeks[language]

  weekdays = weekdays
    .slice(firstDayOfWeekIndex)
    .concat(weekdays.slice(0, firstDayOfWeekIndex))
  let count = 0

  return (
    <>
      {weekdays.map((weekday) => {
        count++
        const style = { gridColumn: count }
        return (
          <div key={weekday} className="weekday" style={style}>
            {weekday}
          </div>
        )
      })}
    </>
  )
}
