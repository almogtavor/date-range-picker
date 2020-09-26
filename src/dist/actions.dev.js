"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setShowColorPicker = setShowColorPicker;
exports.setViewedMonth = setViewedMonth;
exports.setViewedYear = setViewedYear;
exports.setMode = setMode;
exports.setInitialBoard = setInitialBoard;
exports.setShowCalendar = exports.setChoosenDates = exports.setHoveredDay = exports.setSelectedDays = exports.setBoardsNum = exports.setFirstDayOfWeekIndex = exports.setEndDate = exports.setStartDate = exports.setLanguage = exports.setSelectedColor = exports.setModeObject = exports.setViewedYearObject = exports.setViewedMonthObject = exports.setShowColorPickerObject = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var setShowColorPickerObject = function setShowColorPickerObject(showColorPicker) {
  return {
    type: 'SET_SHOW_COLOR_PICKER',
    showColorPicker: showColorPicker
  };
};

exports.setShowColorPickerObject = setShowColorPickerObject;

function setShowColorPicker(id, showColorPicker) {
  return function (dispatch, getState) {
    var stateShowColorPicker = getState().lowerFooter.showColorPicker;
    var boardsNum = getState().general.boardsNum;

    var componentIDs = _toConsumableArray(Array(boardsNum).keys());

    var stateObj = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = componentIDs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        if (id === i) {
          stateObj[i] = showColorPicker;
        } else {
          stateObj[i] = stateShowColorPicker[i];
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

    dispatch(setShowColorPickerObject(stateObj));
  };
}

var setViewedMonthObject = function setViewedMonthObject(viewedMonth) {
  return {
    type: 'SET_VIEWED_MONTH',
    viewedMonth: viewedMonth
  };
};

exports.setViewedMonthObject = setViewedMonthObject;

function setViewedMonth(id, viewedMonth) {
  return function (dispatch, getState) {
    var stateViewedMonth = getState().datesHeader.viewedMonth;
    var boardsNum = getState().general.boardsNum;

    var componentIDs = _toConsumableArray(Array(boardsNum).keys());

    var stateObj = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = componentIDs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var i = _step2.value;

        if (id === i) {
          stateObj[i] = viewedMonth;
        } else {
          stateObj[i] = stateViewedMonth[i];
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

    dispatch(setViewedMonthObject(stateObj));
  };
}

var setViewedYearObject = function setViewedYearObject(viewedYear) {
  return {
    type: 'SET_VIEWED_YEAR',
    viewedYear: viewedYear
  };
};

exports.setViewedYearObject = setViewedYearObject;

function setViewedYear(id, viewedYear) {
  return function (dispatch, getState) {
    var stateViewedYear = getState().datesHeader.viewedYear;
    var boardsNum = getState().general.boardsNum;

    var componentIDs = _toConsumableArray(Array(boardsNum).keys());

    var stateObj = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = componentIDs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var i = _step3.value;

        if (id === i) {
          stateObj[i] = viewedYear;
        } else {
          stateObj[i] = stateViewedYear[i];
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

    dispatch(setViewedYearObject(stateObj));
  };
}

var setModeObject = function setModeObject(mode) {
  return {
    type: 'SET_MODE',
    mode: mode
  };
};

exports.setModeObject = setModeObject;

function setMode(id, mode) {
  return function (dispatch, getState) {
    var stateMode = getState().calendarModes.mode;
    var boardsNum = getState().general.boardsNum;
    console.log(getState());

    var componentIDs = _toConsumableArray(Array(boardsNum).keys());

    var stateObj = {};
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = componentIDs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var i = _step4.value;

        if (id === i) {
          stateObj[i] = mode;
        } else {
          stateObj[i] = stateMode[i];
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

    dispatch(setModeObject(stateObj));
  };
}

var setSelectedColor = function setSelectedColor(selectedColor) {
  return {
    type: 'SET_SELECTED_COLOR',
    selectedColor: selectedColor
  };
};

exports.setSelectedColor = setSelectedColor;

var setLanguage = function setLanguage(language) {
  return {
    type: 'SET_LANGUAGE',
    language: language
  };
};

exports.setLanguage = setLanguage;

var setStartDate = function setStartDate(startDate) {
  return {
    type: 'SET_START_DATE',
    startDate: startDate
  };
};

exports.setStartDate = setStartDate;

var setEndDate = function setEndDate(endDate) {
  return {
    type: 'SET_END_DATE',
    endDate: endDate
  };
};

exports.setEndDate = setEndDate;

var setFirstDayOfWeekIndex = function setFirstDayOfWeekIndex(firstDayOfWeekIndex) {
  return {
    type: 'SET_FIRST_DAY_OF_WEEK_INDEX',
    firstDayOfWeekIndex: firstDayOfWeekIndex
  };
};

exports.setFirstDayOfWeekIndex = setFirstDayOfWeekIndex;

var setBoardsNum = function setBoardsNum(boardsNum) {
  return {
    type: 'SET_BOARDS_NUM',
    boardsNum: boardsNum
  };
};

exports.setBoardsNum = setBoardsNum;

function setInitialBoard(boardsNum, language) {
  return function (dispatch) {
    var monthsObj = {};
    var yearsObj = {};
    var modeObj = {};
    var showColorPickerObj = {};

    var componentIDs = _toConsumableArray(Array(boardsNum).keys());

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = componentIDs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var i = _step5.value;
        var index = language === "Hebrew" ? boardsNum - i - 1 : i;
        var date = new Date();
        date.setMonth(new Date().getMonth() - (boardsNum - i) + 1); // TODO: simplify

        monthsObj[index] = date.getMonth() + 1;
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

    dispatch(setBoardsNum(boardsNum));
    dispatch(setViewedMonth(monthsObj));
    dispatch(setViewedYear(yearsObj));
    dispatch(setMode(modeObj));
    dispatch(setShowColorPicker(showColorPickerObj));
  };
}

var setSelectedDays = function setSelectedDays(selectedDays) {
  return {
    type: 'SET_SELECTED_DAYS',
    selectedDays: selectedDays
  };
};

exports.setSelectedDays = setSelectedDays;

var setHoveredDay = function setHoveredDay(hoveredDay) {
  return {
    type: 'SET_HOVERED_DAY',
    hoveredDay: hoveredDay
  };
};

exports.setHoveredDay = setHoveredDay;

var setChoosenDates = function setChoosenDates(choosenDates) {
  return {
    type: 'SET_CHOOSEN_DATES',
    choosenDates: choosenDates
  };
};

exports.setChoosenDates = setChoosenDates;

var setShowCalendar = function setShowCalendar(showCalendar) {
  return {
    type: 'SET_SHOW_CALENDAR',
    showCalendar: showCalendar
  };
};

exports.setShowCalendar = setShowCalendar;