import React, { useCallback, useState } from "react"
import "../../styles/DaysAmountTabStyles/days-amount-tab.css"
import { getDefaultRanges } from "../../utils/daysAmountTabUtils"
import {
  useEndDate,
  useStartDate,
  useLanguage,
} from "../../context/InitialParametersContext"
import {
  getOpacityColorStyle,
  updateViewedMonths,
} from "../../utils/generalUtils"
import { DefaultRange } from "./DefaultRange"

export function DaysAmountTab(props) {
  const {
    selectedColor,
    setSelectedDays,
    boardsNum,
    datesHeaderStateDispatch,
  } = props

  const style = getOpacityColorStyle(selectedColor, 60)
  const errorClassName = " error-input"
  const defaultClassName = "days-amount-input"
  const language = useLanguage()
  let inputText = " Days Backwards"
  if (language === "Hebrew") {
    inputText = " ימים אחורה"
  }

  const [inputClassName, setInputClassName] = useState(defaultClassName)
  const startDate = useStartDate()
  const endDate = useEndDate()
  let currentDate = new Date()
  const defaultRanges = getDefaultRanges(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  )
  const [fieldValue, setFieldValue] = useState("")

  const updateCalendar = useCallback(
    (decresement) => {
      let currentDate = new Date()
      let daysAmountBackwards = new Date()
      daysAmountBackwards.setDate(daysAmountBackwards.getDate() - decresement)
      setSelectedDays([daysAmountBackwards, currentDate])
      updateViewedMonths(
        boardsNum,
        language,
        datesHeaderStateDispatch,
        daysAmountBackwards,
        currentDate
      )
    },
    [boardsNum, language, setSelectedDays, datesHeaderStateDispatch]
  )

  const handleChange = (e) => {
    let value = e.target.value
    let nonNumericChar = /[^0-9-]+/g
    let pattern = /([-])?([0-9]+)/g
    let matches = value.match(pattern)
    value = value.replace(nonNumericChar, "")
    if (matches) {
      value = matches[0]
    }
    let daysAmountBackwards = new Date()
    daysAmountBackwards.setDate(daysAmountBackwards.getDate() - parseInt(value))
    value = valueValidation(value, daysAmountBackwards)
    if (value === "") {
      setSelectedDays([])
    }
    updateOnChange(value)
  }

  function valueValidation(value, daysAmountBackwards) {
    if (
      value.length > 4 ||
      daysAmountBackwards < startDate ||
      daysAmountBackwards > endDate
    ) {
      value = value.substring(0, value.length - 1)
      errorInput()
    }
    return value
  }

  function updateOnChange(daysAmount) {
    if (
      (daysAmount && daysAmount[0] !== "-") ||
      (daysAmount[0] === "-" && !isNaN(daysAmount[daysAmount.length - 1]))
    ) {
      if (parseInt(daysAmount) > 0) {
        updateCalendar(parseInt(daysAmount) - 1)
      } else {
        updateCalendar(daysAmount)
      }
    }
    setFieldValue(daysAmount)
  }

  function errorInput() {
    setInputClassName(defaultClassName + errorClassName)
    setTimeout(() => {
      setInputClassName(defaultClassName)
    }, 3000)
  }

  return (
    <>
      <div className="days-amount-tab-template">
        <div className="days-amount-tab-div" style={style}>
          {defaultRanges.map((range, i) => {
            return (
              <DefaultRange
                key={i}
                range={range}
                index={i}
                boardsNum={boardsNum}
                datesHeaderStateDispatch={datesHeaderStateDispatch}
                setSelectedDays={setSelectedDays}
              />
            )
          })}
          <div className="days-amount-field" lang={language}>
            <input
              className={inputClassName}
              onChange={(e) => handleChange(e)}
              value={fieldValue}
            />
            {inputText}
          </div>
        </div>
      </div>
    </>
  )
}
