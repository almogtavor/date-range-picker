"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  muted: false,
  showColorPicker: false,
  selectedColor: "#2196f3",
  viewedMonth: new Date().getMonth(),
  viewedYear: new Date().getFullYear(),
  mode: "Days"
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var payload = arguments.length > 1 ? arguments[1] : undefined;

  if (payload.type === 'SET_SELECTED_COLOR') {
    return Object.assign({}, state, {
      selectedColor: payload.selectedColor
    });
  } else if (payload.type === 'SET_MUTED') {
    return Object.assign({}, state, {
      muted: payload.muted
    });
  } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
    return Object.assign({}, state, {
      showColorPicker: payload.showColorPicker
    });
  } else if (payload.type === 'SET_VIEWED_MONTH') {
    return Object.assign({}, state, {
      viewedMonth: payload.viewedMonth
    });
  } else if (payload.type === 'SET_VIEWED_YEAR') {
    return Object.assign({}, state, {
      viewedYear: payload.viewedYear
    });
  } else if (payload.type === 'SET_MODE') {
    return Object.assign({}, state, {
      mode: payload.mode
    });
  } else {
    return state;
  }
}

;
var _default = rootReducer;
exports["default"] = _default;