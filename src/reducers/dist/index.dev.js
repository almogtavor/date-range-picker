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
  boardsNum: 2,
  hoveredDay: null
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var payload = arguments.length > 1 ? arguments[1] : undefined;

  if (payload) {
    var boardsNum = payload.boardsNum ? payload.boardsNum : state.boardsNum;

    var componentIDs = _toConsumableArray(Array(boardsNum).keys());

    if (payload.type === 'SET_SELECTED_COLOR') {
      return Object.assign({}, state, {
        selectedColor: payload.selectedColor
      });
    } else if (payload.type === 'SET_SHOW_COLOR_PICKER') {
      var stateObj = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = componentIDs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (payload.id === i) {
            stateObj[i] = payload.showColorPicker;
          } else {
            stateObj[i] = state.showColorPicker[i];
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Object.assign({}, state, {
        showColorPicker: stateObj
      });
    } else if (payload.type === 'SET_VIEWED_MONTH') {
      var _stateObj = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = componentIDs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _i = _step2.value;

          if (payload.id === _i) {
            _stateObj[_i] = payload.viewedMonth;
          } else {
            _stateObj[_i] = state.viewedMonth[_i];
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return Object.assign({}, state, {
        viewedMonth: _stateObj
      });
    } else if (payload.type === 'SET_VIEWED_YEAR') {
      var _stateObj2 = {};
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = componentIDs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _i2 = _step3.value;

          if (payload.id === _i2) {
            _stateObj2[_i2] = payload.viewedYear;
          } else {
            _stateObj2[_i2] = state.viewedYear[_i2];
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return Object.assign({}, state, {
        viewedYear: _stateObj2
      });
    } else if (payload.type === 'SET_MODE') {
      var _stateObj3 = {};
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = componentIDs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _i3 = _step4.value;

          if (payload.id === _i3) {
            _stateObj3[_i3] = payload.mode;
          } else {
            _stateObj3[_i3] = state.mode[_i3];
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
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
      var showColorPickerObj = {};
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = componentIDs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _i4 = _step5.value;
          var index = state.language === "Hebrew" ? boardsNum - _i4 - 1 : _i4;
          var date = new Date();
          date.setMonth(new Date().getMonth() - (boardsNum - _i4) + 2);
          monthsObj[index] = date.getMonth();
          yearsObj[index] = date.getFullYear();
          modeObj[index] = "Days";
          showColorPickerObj[index] = false;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
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
    } else if (payload.type === 'SET_HOVERED_DAY') {
      return Object.assign({}, state, {
        hoveredDay: payload.hoveredDay
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