const initialState = {
    boardsKeysMap: ["1", "0"],
    showColorPicker: {"0": false,"1": false,},
    viewedMonth: {"0": new Date().getMonth() - 1, "1": new Date().getMonth()},
    viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
    mode: {'0': "Days", '1': "Days", },
    selectedDays: [],
    selectedColor: "#2196f3",
    language: "Hebrew",
    startYear: 1900,
    endYear: 2025,
    firstDayOfWeekIndex: 0,
    boardsNum: 2,
};


function rootReducer (state = initialState, payload) {
  const componentIDs = state.language === "Hebrew" ? [...Array(state.boardsNum).keys()].reverse() : [...Array(state.boardsNum).keys()];
  let stateObj = new Object();

  if (payload.type === 'SET_SELECTED_COLOR') {
      return Object.assign({}, state, {
        selectedColor: payload.selectedColor
      });
    } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
      for (let i in componentIDs) {
        if (String(payload.id) === i) {
          stateObj[i] = payload.showColorPicker;
        } else {
          stateObj[i] = state.showColorPicker[i];
        }
      }
      return Object.assign({}, state, {
        showColorPicker: stateObj
      });
  } else if (payload.type === 'SET_VIEWED_MONTH') {
      for (let i in componentIDs) {
        if (String(payload.id) === i) {
          stateObj[i] = payload.viewedMonth;
        } else {
          stateObj[i] = state.viewedMonth[i];
        }
      }
      return Object.assign({}, state, {
        viewedMonth: stateObj
      });
  } else if (payload.type === 'SET_VIEWED_YEAR') {
      for (let i in componentIDs) {
        if (String(payload.id) === i) {
          stateObj[i] = payload.viewedYear;
        } else {
          stateObj[i] = state.viewedYear[i];
        }
      }
      return Object.assign({}, state, {
        viewedYear: stateObj
      });
  } else if (payload.type === 'SET_MODE') {
      for (let i in componentIDs) {
        if (String(payload.id) === i) {
          stateObj[i] = payload.mode;
        } else {
          stateObj[i] = state.mode[i];
        }
      }
      return Object.assign({}, state, {
        mode: stateObj
      });
  } else if (payload.type === 'SET_LANGUAGE') {
      return Object.assign({}, state, {
        language: payload.language
      });
  } else if (payload.type === 'SET_START_YEAR') {
      return Object.assign({}, state, {
        startYear: payload.startYear
      });
  } else if (payload.type === 'SET_END_YEAR') {
      return Object.assign({}, state, {
        endYear: payload.endYear
      });
  } else if (payload.type === 'SET_FIRST_DAY_OF_WEEK_INDEX') {
      return Object.assign({}, state, {
        firstDayOfWeekIndex: payload.firstDayOfWeekIndex
      });
  } else if (payload.type === 'SET_BOARDS_NUM') {
      return Object.assign({}, state, {
        boardsNum: payload.boardsNum
      });
  } else if (payload.type === 'SET_SELECTED_DAYS') {
      return Object.assign({}, state, {
        selectedDays: payload.selectedDays
      });
  } else {
      return state;
  }
};

export default rootReducer;