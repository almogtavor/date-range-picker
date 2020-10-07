import { getUpdatedObject, getInitialObject } from './utils/actionsUtils'; 

export const setShowColorPickerObject = (showColorPicker) => ({
    type: 'SET_SHOW_COLOR_PICKER', 
    showColorPicker
})

export function setShowColorPicker(id, showColorPicker) {
    return (dispatch, getState) => {
        const stateShowColorPicker = getState().lowerFooter.showColorPicker;
        const stateObj = getUpdatedObject(getState, id, showColorPicker, stateShowColorPicker);
        dispatch(setShowColorPickerObject(stateObj));
    };
}

export const setViewedMonthObject = (viewedMonth) => ({
    type: 'SET_VIEWED_MONTH',
    viewedMonth
})

export function setViewedMonth(id, viewedMonth) {
    return (dispatch, getState) => {
        const stateViewedMonth = getState().datesHeader.viewedMonth;
        const stateObj = getUpdatedObject(getState, id, viewedMonth, stateViewedMonth);
        dispatch(setViewedMonthObject(stateObj));
    };
}

export const setViewedYearObject = (viewedYear) => ({
    type: 'SET_VIEWED_YEAR',
    viewedYear
})

export function setViewedYear(id, viewedYear) {
    return (dispatch, getState) => {
        const stateViewedYear = getState().datesHeader.viewedYear;
        const stateObj = getUpdatedObject(getState, id, viewedYear, stateViewedYear);
        dispatch(setViewedYearObject(stateObj));
    };
}

export const setModeObject = (mode) => ({
    type: 'SET_MODE',
    mode
})

export function setMode(id, mode) {
    return (dispatch, getState) => {
        const stateMode = getState().calendarModes.mode;
        const stateObj = getUpdatedObject(getState, id, mode, stateMode);
        dispatch(setModeObject(stateObj));
    };
}

export const setSelectedColor = selectedColor => ({
    type: 'SET_SELECTED_COLOR',
    selectedColor
})

export const setLanguage = language => ({
    type: 'SET_LANGUAGE',
    language
})

export const setStartDate = startDate => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate
})

export const setFirstDayOfWeekIndex = firstDayOfWeekIndex => ({
    type: 'SET_FIRST_DAY_OF_WEEK_INDEX',
    firstDayOfWeekIndex
})

export const setBoardsNum = (boardsNum) => ({
    type: 'SET_BOARDS_NUM',
    boardsNum: boardsNum
})

export function setInitialBoard(boardsNum, language, startDate, endDate) {
    return (dispatch) => {
        let { 
          monthsObj, 
          yearsObj, 
          modeObj, 
          showColorPickerObj,
        } = getInitialObject(boardsNum, language, startDate, endDate);
        dispatch(setBoardsNum(boardsNum));
        dispatch(setViewedMonthObject(monthsObj));
        dispatch(setViewedYearObject(yearsObj));
        dispatch(setModeObject(modeObj));
        dispatch(setShowColorPickerObject(showColorPickerObj));
    };
  }


export const setSelectedDays = selectedDays => ({
    type: 'SET_SELECTED_DAYS',
    selectedDays
})

export const setHoveredDay = hoveredDay => ({
    type: 'SET_HOVERED_DAY',
    hoveredDay
})

export const setChoosenDates = choosenDates => ({
    type: 'SET_CHOOSEN_DATES',
    choosenDates
})

export const setShowCalendar = showCalendar => ({
    type: 'SET_SHOW_CALENDAR',
    showCalendar
})

export const setShowDaysAmountTab = showDaysAmountTab => ({
    type: 'SET_SHOW_DAYS_AMOUNT_TAB',
    showDaysAmountTab
})

export const setChoosenDatesList = choosenDatesList => ({
    type: 'SET_CHOOSEN_DATES_LIST',
    choosenDatesList
})

export const setStoredDates = storedDates => ({
    type: 'SET_STORED_DATES',
    storedDates
})
