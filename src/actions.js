import { getInitialObject } from "./utils/actionsUtils"

export const setShowColorPicker = (boardsNum, id, showColorPicker) => ({
  type: "SET_SHOW_COLOR_PICKER",
  showColorPicker: showColorPicker,
  id: id,
  boardsNum: boardsNum,
})

export const setViewedMonth = (boardsNum, id, viewedMonth) => ({
  type: "SET_VIEWED_MONTH",
  viewedMonth: viewedMonth,
  id: id,
  boardsNum: boardsNum,
})

export const setViewedYear = (boardsNum, id, viewedYear) => ({
  type: "SET_VIEWED_YEAR",
  viewedYear: viewedYear,
  id: id,
  boardsNum: boardsNum,
})

export const setMode = (boardsNum, id, mode) => ({
  type: "SET_MODE",
  mode: mode,
  id: id,
  boardsNum: boardsNum,
})

export const setSelectedColor = (selectedColor) => ({
  type: "SET_SELECTED_COLOR",
  selectedColor,
})

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  language,
})

export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
})

export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
})

export const setFirstDayOfWeekIndex = (firstDayOfWeekIndex) => ({
  type: "SET_FIRST_DAY_OF_WEEK_INDEX",
  firstDayOfWeekIndex,
})

export function setInitialBoard(boardsNum, language, startDate, endDate) {
  return (dispatch) => {
    let { monthsObj, yearsObj, modeObj } = getInitialObject(
      boardsNum,
      language,
      startDate,
      endDate
    )
    for (let id = 0; id < boardsNum; id++) {
      // dispatch(setBoardsNum(boardsNum));
      dispatch(setViewedMonth(boardsNum, id, monthsObj))
      dispatch(setViewedYear(boardsNum, id, yearsObj))
      dispatch(setMode(boardsNum, id, modeObj))
    }
  }
}

export const setChoosenDates = (choosenDates) => ({
  type: "SET_CHOOSEN_DATES",
  choosenDates,
})

export const setShowDaysAmountTab = (showDaysAmountTab) => ({
  type: "SET_SHOW_DAYS_AMOUNT_TAB",
  showDaysAmountTab,
})

export const setChoosenDatesList = (choosenDatesList) => ({
  type: "SET_CHOOSEN_DATES_LIST",
  choosenDatesList,
})

export const setStoredDates = (storedDates) => ({
  type: "SET_STORED_DATES",
  storedDates,
})
