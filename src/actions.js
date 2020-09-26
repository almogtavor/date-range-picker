export const setShowColorPickerObject = (showColorPicker) => ({
    type: 'SET_SHOW_COLOR_PICKER', 
    showColorPicker
})

export function setShowColorPicker(id, showColorPicker) {
    return (dispatch, getState) => {
        const stateShowColorPicker = getState().lowerFooter.showColorPicker;
        const boardsNum = getState().general.boardsNum;
        const componentIDs = [...Array(boardsNum).keys()];
        let stateObj = {};
        for (let i of componentIDs) {
          if (id === i) {
            stateObj[i] = showColorPicker;
          } else {
            stateObj[i] = stateShowColorPicker[i];
          }
        }
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
        const boardsNum = getState().general.boardsNum;
        const componentIDs = [...Array(boardsNum).keys()];
        let stateObj = {};
        for (let i of componentIDs) {
          if (id === i) {
            stateObj[i] = viewedMonth;
          } else {
            stateObj[i] = stateViewedMonth[i];
          }
        }
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
        const boardsNum = getState().general.boardsNum;
        const componentIDs = [...Array(boardsNum).keys()];
        let stateObj = {};
        for (let i of componentIDs) {
          if (id === i) {
            stateObj[i] = viewedYear;
          } else {
            stateObj[i] = stateViewedYear[i];
          }
        }
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
        const boardsNum = getState().general.boardsNum;
        console.log(getState());
        const componentIDs = [...Array(boardsNum).keys()];
        let stateObj = {};
        for (let i of componentIDs) {
          if (id === i) {
            stateObj[i] = mode;
          } else {
            stateObj[i] = stateMode[i];
          }
        }
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

export function setInitialBoard(boardsNum, language) {
    return (dispatch) => {
        let monthsObj = {};
        let yearsObj = {};
        let modeObj = {};
        let showColorPickerObj = {};
        const componentIDs = [...Array(boardsNum).keys()];
      
        for (let i of componentIDs) {
          const index = language === "Hebrew" ? boardsNum - i - 1 : i;
          let date = new Date();
          date.setMonth(new Date().getMonth() - (boardsNum - i) + 1); // TODO: simplify
          monthsObj[index] = date.getMonth() + 1;
          yearsObj[index] = date.getFullYear();
          modeObj[index] = "Days";
          showColorPickerObj[index] = false;
        }
        dispatch(setBoardsNum(boardsNum));
        dispatch(setViewedMonth(monthsObj));
        dispatch(setViewedYear(yearsObj));
        dispatch(setMode(modeObj));
        dispatch(setShowColorPicker(showColorPickerObj));
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