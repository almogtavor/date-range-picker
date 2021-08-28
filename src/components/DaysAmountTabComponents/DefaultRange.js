import React from "react"
import { daysAmountTabConfig } from "../../configuration/config"
import { useLanguage } from "../../context/InitialParametersContext"
import { updateViewedMonths } from "../../utils/generalUtils"

export function DefaultRange(props) {
  const {
    range,
    boardsNum,
    index,
    setSelectedDays,
    datesHeaderStateDispatch,
  } = props

  const className = "pickable-days-amount"
  const language = useLanguage()

  const handleClick = (dates) => () => {
    setSelectedDays(dates)
    updateViewedMonths(
      boardsNum,
      language,
      datesHeaderStateDispatch,
      dates[0],
      dates[1]
    )
  }

  return (
    <div className={className} onClick={handleClick(range)}>
      {daysAmountTabConfig.defualtRangesTexts[language][index]}
    </div>
  )
}
