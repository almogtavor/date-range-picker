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

var _actionsUtils = require("./utils/actionsUtils");

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
    var stateObj = (0, _actionsUtils.getUpdatedObject)(getState, id, showColorPicker, stateShowColorPicker);
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
    var stateObj = (0, _actionsUtils.getUpdatedObject)(getState, id, viewedMonth, stateViewedMonth);
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
    var stateObj = (0, _actionsUtils.getUpdatedObject)(getState, id, viewedYear, stateViewedYear);
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
    var stateObj = (0, _actionsUtils.getUpdatedObject)(getState, id, mode, stateMode);
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
    var _getInitialObject = (0, _actionsUtils.getInitialObject)(boardsNum, language),
        monthsObj = _getInitialObject.monthsObj,
        yearsObj = _getInitialObject.yearsObj,
        modeObj = _getInitialObject.modeObj,
        showColorPickerObj = _getInitialObject.showColorPickerObj;

    dispatch(setBoardsNum(boardsNum));
    dispatch(setViewedMonthObject(monthsObj));
    dispatch(setViewedYearObject(yearsObj));
    dispatch(setModeObject(modeObj));
    dispatch(setShowColorPickerObject(showColorPickerObj));
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