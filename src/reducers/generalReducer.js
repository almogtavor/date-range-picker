import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    boardsNum: 2,
    showCalendar: false,
};

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
    // move logic to selector
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

function setShowCalendar(state, payload) {
  return updateObject(state, {showCalendar: payload.showCalendar});
}

const generalReducerMapper = createReducer(initialState, {
    SET_BOARDS_NUM: setBoardsNum,
    SET_SHOW_CALENDAR: setShowCalendar
})

export default generalReducerMapper;