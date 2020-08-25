"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  selectedColor: "#2196f3",
  language: "Hebrew",
  startYear: 1900,
  endYear: 2100,
  firstDayOfWeekIndex: 0,
  boardsNum: 2
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var payload = arguments.length > 1 ? arguments[1] : undefined;

  if (payload.type === 'SET_SELECTED_COLOR') {
    return Object.assign({}, state, {
      selectedColor: payload.selectedColor
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
  } else {
    return state;
  }
}

;
var _default = rootReducer;
exports["default"] = _default;