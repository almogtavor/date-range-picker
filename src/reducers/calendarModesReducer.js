import { createReducer, updateObject } from "./reducersUtils";

const initialState = {
    boardsKeysMap: ["1", "0"],
    showColorPicker: {"0": false,"1": false,},
    selectedDays: [],
    selectedColor: "#2196f3",
    boardsNum: 2,
    hoveredDay: null,
    lastChangedId: null,
    pickType: "range", // can be date, range and ranges
};


function calendarModesReducer (state = initialState, payload) {
  console.log(payload);
  console.log(state);
  if (payload) {
    const boardsNum = payload.boardsNum ? payload.boardsNum : state.boardsNum;
    const componentIDs = [...Array(boardsNum).keys()];
  
    if (payload.type === 'SET_SELECTED_COLOR') {
        return setSelectedColor(state, payload);
    } else if (payload.type === 'SET_SELECTED_DAYS') {
        return setSelectedDays(state, payload);
    } else if (payload.type === 'SET_HOVERED_DAY') {
        return setHoveredDay(state, payload);
    } else if (payload.type === 'SET_CHOOSEN_DATES') {
        return setChoosenDates(state, payload);
    } else if (payload.type === 'SET_SHOW_CALENDAR') {
        return setShowCalendar(state, payload);
    } else {
        return state;
    }
  } else {
      return state;
  }
};

const calendarModesReducerMapper = createReducer(initialState, {
  SET_SELECTED_COLOR: setSelectedColor,
  SET_SELECTED_DAYS: setSelectedDays,
  SET_HOVERED_DAY: setHoveredDay,
  SET_CHOOSEN_DATES: setChoosenDates,
  SET_SHOW_CALENDAR: setShowCalendar
})

export default calendarModesReducerMapper;

function setShowCalendar(state, payload) {
  return updateObject(state, {showCalendar: payload.showCalendar});
}

function setChoosenDates(state, payload) {
  return updateObject(state, {choosenDates: payload.choosenDates});
}

function setHoveredDay(state, payload) {
  return updateObject(state, {hoveredDay: payload.hoveredDay});
}

function setSelectedDays(state, payload) {
  return updateObject(state, {selectedDays: payload.selectedDays});
}

function setSelectedColor(state, payload) {
  return updateObject(state, {selectedColor: payload.selectedColor});
}
