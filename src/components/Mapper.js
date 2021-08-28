import React, { useEffect, useReducer, useState } from "react"
import { CalendarInstance as BoardInstance } from "./BoardInstance"
import { useLanguage } from "../context/InitialParametersContext"
import { updateObject } from "../utils/generalUtils"
import { CalendarHeader } from "./CalendarHeaderComponents/CalendarHeader"
import { DaysAmountTabButton } from "./DaysAmountTabComponents/DaysAmountTabButton"
import { getInitialObject, getUpdatedObject } from "../utils/actionsUtils"

const datesHeaderInitialStateCalculation = (language, boardsNum) => {
  let stateObj
  if (boardsNum === 1) {
    stateObj = {
      viewedMonth: { 0: new Date().getMonth() },
      viewedYear: { 0: new Date().getFullYear() },
    }
  } else if (boardsNum === 2) {
    stateObj = {
      viewedMonth: { 0: new Date().getMonth(), 1: new Date().getMonth() + 1 },
      viewedYear: { 0: new Date().getFullYear(), 1: new Date().getFullYear() },
    }
    if (stateObj.viewedMonth["1"] === 12) {
      stateObj.viewedMonth["1"] = 0
      stateObj.viewedYear["1"] = stateObj.viewedYear["1"] + 1
    }
    if (language === "Hebrew") {
      const leftBoardMonth = stateObj.viewedMonth["0"]
      let leftBoardYear = stateObj.viewedYear["0"]
      stateObj.viewedMonth["0"] = stateObj.viewedMonth["1"]
      stateObj.viewedYear["0"] = stateObj.viewedYear["1"]
      stateObj.viewedMonth["1"] = leftBoardMonth
      stateObj.viewedYear["1"] = leftBoardYear
    }
  }
  return stateObj
}

function setViewedMonth(state, payload) {
  return updateObject(state, { viewedMonth: payload.viewedMonth })
}

function setViewedYear(state, payload) {
  return updateObject(state, { viewedYear: payload.viewedYear })
}

function datesHeaderReducerMapper(state, payload) {
  if (payload.type === "SET_VIEWED_MONTH") {
    payload.viewedMonth = getUpdatedObject(
      payload.boardsNum,
      payload.id,
      payload.viewedMonth,
      state.viewedMonth
    )
    return setViewedMonth(state, payload)
  } else if (payload.type === "SET_VIEWED_YEAR") {
    payload.viewedYear = getUpdatedObject(
      payload.boardsNum,
      payload.id,
      payload.viewedYear,
      state.viewedYear
    )
    return setViewedYear(state, payload)
  } else {
    return state
  }
}

function getMarginLeft(boardsNum) {
  if (boardsNum === 1) {
    return { marginLeft: "255px" }
  } else if (boardsNum === 2) {
    return { marginLeft: 255 / 2 + "px" }
  }
  return {}
}

export const Mapper = (props) => {
  const {
    boardsNum,
    startDate,
    endDate,
    defaultColor,
    showCalendar,
    setButtonDatesText,
    setShowCalendar,
    callback,
  } = props

  const language = useLanguage()
  const datesHeaderInitialState = datesHeaderInitialStateCalculation(
    language,
    boardsNum
  )
  const [datesHeaderState, datesHeaderStateDispatch] = useReducer(
    datesHeaderReducerMapper,
    datesHeaderInitialState
  )
  const calendarsIndexes = [...Array(boardsNum).keys()]
  const marginLeftStyle = getMarginLeft(boardsNum)

  const [chosenDatesList, setChosenDatesList] = useState([])
  const [storedDates, setStoredDates] = useState([])
  const [selectedColor, setSelectedColor] = useState("#219643")
  const [selectedDays, setSelectedDays] = useState([])
  const [hoveredDay, setHoveredDay] = useState(null)

  useEffect(() => {
    if (language) {
      let { monthsObj, yearsObj } = getInitialObject(
        boardsNum,
        language,
        startDate,
        endDate
      )
      for (let id = 0; id < boardsNum; id++) {
        datesHeaderStateDispatch(setViewedMonth(boardsNum, id, monthsObj))
        datesHeaderStateDispatch(setViewedYear(boardsNum, id, yearsObj))
      }
    } else {
      throw Object.assign(new Error('"language" prop is undefined'), {
        code: 403,
      })
    }

    if (defaultColor) {
      setSelectedColor(defaultColor)
    }
  }, [boardsNum, defaultColor, endDate, language, startDate])

  return (
    <>
      {showCalendar && (
        <div className="date-range-picker" style={marginLeftStyle}>
          <CalendarHeader
            selectedColor={selectedColor}
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
            hoveredDay={hoveredDay}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            storedDates={storedDates}
            setStoredDates={setStoredDates}
            chosenDatesList={chosenDatesList}
            setChosenDatesList={setChosenDatesList}
            boardsNum={boardsNum}
          />
          {calendarsIndexes.map((i) => {
            return (
              <BoardInstance
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                setSelectedDays={setSelectedDays}
                selectedDays={selectedDays}
                setHoveredDay={setHoveredDay}
                hoveredDay={hoveredDay}
                datesHeaderState={datesHeaderState}
                datesHeaderStateDispatch={datesHeaderStateDispatch}
                storedDates={storedDates}
                setStoredDates={setStoredDates}
                chosenDatesList={chosenDatesList}
                setChosenDatesList={setChosenDatesList}
                setButtonDatesText={setButtonDatesText}
                setShowCalendar={setShowCalendar}
                callback={callback}
                boardsNum={boardsNum}
                key={i}
                i={i}
              />
            )
          })}
          <DaysAmountTabButton
            selectedColor={selectedColor}
            datesHeaderStateDispatch={datesHeaderStateDispatch}
            setSelectedDays={setSelectedDays}
            boardsNum={boardsNum}
          />
        </div>
      )}
    </>
  )
}
