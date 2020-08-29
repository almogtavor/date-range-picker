"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = {
  boardsKeysMap: ["1", "0"],
  showColorPicker: {
    "0": false,
    "1": false
  },
  viewedMonth: {
    "0": new Date().getMonth() - 1,
    "1": new Date().getMonth()
  },
  viewedYear: {
    '0': new Date().getFullYear(),
    '1': new Date().getFullYear()
  },
  mode: {
    '0': "Days",
    '1': "Days"
  },
  selectedDays: [],
  selectedColor: "#2196f3",
  language: "English",
  startYear: 1900,
  endYear: 2025,
  firstDayOfWeekIndex: 0,
  boardsNum: 2
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var payload = arguments.length > 1 ? arguments[1] : undefined;
  var boardsNum = payload.boardsNum ? payload.boardsNum : state.boardsNum;
  var componentIDs = state.language === "Hebrew" ? _toConsumableArray(Array(boardsNum).keys()).reverse() : _toConsumableArray(Array(boardsNum).keys());

  if (payload) {
    if (payload.type === 'SET_SELECTED_COLOR') {
      return Object.assign({}, state, {
        selectedColor: payload.selectedColor
      });
    } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
      var stateObj = {};

      for (var i in componentIDs) {
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
      var _stateObj = {};

      for (var _i in componentIDs) {
        if (String(payload.id) === _i) {
          _stateObj[_i] = payload.viewedMonth;
        } else {
          _stateObj[_i] = state.viewedMonth[_i];
        }
      }

      return Object.assign({}, state, {
        viewedMonth: _stateObj
      });
    } else if (payload.type === 'SET_VIEWED_YEAR') {
      var _stateObj2 = {};

      for (var _i2 in componentIDs) {
        if (String(payload.id) === _i2) {
          _stateObj2[_i2] = payload.viewedYear;
        } else {
          _stateObj2[_i2] = state.viewedYear[_i2];
        }
      }

      return Object.assign({}, state, {
        viewedYear: _stateObj2
      });
    } else if (payload.type === 'SET_MODE') {
      var _stateObj3 = {};

      for (var _i3 in componentIDs) {
        if (String(payload.id) === _i3) {
          _stateObj3[_i3] = payload.mode;
        } else {
          _stateObj3[_i3] = state.mode[_i3];
        }
      }

      return Object.assign({}, state, {
        mode: _stateObj3
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
      var monthsObj = {};
      var yearsObj = {};
      var modeObj = {};
      var showColorPickerObj = {}; // componentIDs = componentIDs.reverse();

      for (var _i4 in componentIDs) {
        var index = state.language === "Hebrew" ? boardsNum - _i4 - 1 : _i4;
        var date = new Date();
        date.setMonth(new Date().getMonth() - (boardsNum - _i4) + 2);
        monthsObj[index] = date.getMonth();
        yearsObj[index] = date.getFullYear();
        modeObj[index] = "Days";
        showColorPickerObj[index] = false;
      }

      return Object.assign({}, state, {
        boardsNum: payload.boardsNum,
        viewedMonth: monthsObj,
        viewedYear: yearsObj,
        mode: modeObj,
        showColorPicker: showColorPickerObj
      });
    } else if (payload.type === 'SET_SELECTED_DAYS') {
      return Object.assign({}, state, {
        selectedDays: payload.selectedDays
      });
    } else {
      return state;
    }
  } else {
    return state;
  }
}

;
var _default = rootReducer;
exports["default"] = _default;