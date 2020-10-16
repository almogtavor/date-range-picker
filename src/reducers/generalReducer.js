import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    boardsNum: 2,
    showCalendar: false,
};

function setBoardsNum(state, payload) {
  return updateObject(state, {boardsNum: payload.boardsNum});
}

function setShowCalendar(state, payload) {
  return updateObject(state, {showCalendar: payload.showCalendar});
}

function setButtonDatesText(state, payload) {
  return updateObject(state, {buttonDatesText: payload.buttonDatesText});
}

const generalReducerMapper = createReducer(initialState, {
    SET_BOARDS_NUM: setBoardsNum,
    SET_SHOW_CALENDAR: setShowCalendar
})

export default generalReducerMapper;