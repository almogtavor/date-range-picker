import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    viewedMonth: {"0": new Date().getMonth() - 1, "1": new Date().getMonth(), },
    viewedYear: {'0': new Date().getFullYear(), '1': new Date().getFullYear(), },
    mode: {'0': "Days", '1': "Days", },
    boardsNum: 2,
    showCalendar: false,
};


function datesHeaderReducer (state = initialState, payload) {
    console.log(payload);
    console.log(state);
    if (payload) {
      const boardsNum = payload.boardsNum ? payload.boardsNum : state.boardsNum;
      const componentIDs = [...Array(boardsNum).keys()];
      let stateObj = {};
    
      if (payload.type === 'SET_VIEWED_MONTH') {
          return setViewedMonth(componentIDs, payload, stateObj, state);
      } else if (payload.type === 'SET_VIEWED_YEAR') {
          return setViewedYear(componentIDs, payload, stateObj, state);
      } else if (payload.type === 'SET_MODE') {
          return setMode(componentIDs, payload, stateObj, state);
      } else if (payload.type === 'SET_BOARDS_NUM') {
          return setBoardsNum(componentIDs, payload, boardsNum, state);
      } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
          return setShowColorPicker(componentIDs, payload, stateObj, state);
      } else {
          return state;
      }
    } else {
        return state;
    }
};

const datesHeaderReducerMapper = createReducer(initialState, {
  SET_VIEWED_MONTH: setViewedMonth,
  SET_VIEWED_YEAR: setViewedYear,
  SET_MODE: setMode,
  SET_BOARDS_NUM: setBoardsNum,
  SET_SHOW_COLOR_PICKER: setShowColorPicker
})

export default datesHeaderReducerMapper;

function setViewedMonth(state, payload) {
  const boardsNum = state.boardsNum;
  const componentIDs = [...Array(boardsNum).keys()];
  let stateObj = {};
  for (let i of componentIDs) {
    if (payload.id === i) {
      stateObj[i] = payload.viewedMonth;
    } else {
      stateObj[i] = state.viewedMonth[i];
    }
  }
  return updateObject(state, { viewedMonth: stateObj });
}

function setViewedYear(state, payload) {
  const boardsNum = state.boardsNum;
  const componentIDs = [...Array(boardsNum).keys()];
  let stateObj = {};
  for (let i of componentIDs) {
    if (payload.id === i) {
      stateObj[i] = payload.viewedYear;
    } else {
      stateObj[i] = state.viewedYear[i];
    }
  }
  return updateObject(state, { viewedYear: stateObj });
}

function setMode(state, payload) {
  const boardsNum = state.boardsNum;
  const componentIDs = [...Array(boardsNum).keys()];
  let stateObj = {};
  for (let i of componentIDs) {
    if (payload.id === i) {
      stateObj[i] = payload.mode;
    } else {
      stateObj[i] = state.mode[i];
    }
  }
  return updateObject(state, {mode: stateObj});
}

function setBoardsNum(state, payload) {
  console.log(state);
  console.log(payload);
  let monthsObj = {};
  let yearsObj = {};
  let modeObj = {};
  let showColorPickerObj = {};
  const boardsNum = payload.boardsNum;
  const componentIDs = [...Array(boardsNum).keys()];

  for (let i of componentIDs) {
    const index = payload.language === "Hebrew" ? boardsNum - i - 1 : i;
    let date = new Date();
    date.setMonth(new Date().getMonth() - (boardsNum - i) + 1);
    monthsObj[index] = date.getMonth() + 1;
    yearsObj[index] = date.getFullYear();
    modeObj[index] = "Days";
    showColorPickerObj[index] = false;
  }
  return updateObject(state, {
    boardsNum: payload.boardsNum,
    viewedMonth: monthsObj,
    viewedYear: yearsObj,
    mode: modeObj,
    showColorPicker: showColorPickerObj,
  });
}

function setShowColorPicker(state, payload) {
  const boardsNum = state.boardsNum;
  const componentIDs = [...Array(boardsNum).keys()];
  let stateObj = {};
  for (let i of componentIDs) {
    if (payload.id === i) {
      stateObj[i] = payload.showColorPicker;
    } else {
      stateObj[i] = state.showColorPicker[i];
    }
  }
  return updateObject(state, { showColorPicker: stateObj });
}
