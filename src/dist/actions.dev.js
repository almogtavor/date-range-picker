"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setShowCalendar = exports.setChoosenDates = exports.setLastChangedId = exports.setHoveredDay = exports.setSelectedDays = exports.setBoardsNum = exports.setFirstDayOfWeekIndex = exports.setEndDate = exports.setStartDate = exports.setLanguage = exports.setSelectedColor = exports.setMode = exports.setViewedYear = exports.setViewedMonth = exports.setShowColorPicker = void 0;

var setShowColorPicker = function setShowColorPicker(id, showColorPicker) {
  return {
    type: 'SET_SHOW_COLOR_PICKER',
    id: id,
    showColorPicker: showColorPicker
  };
};

exports.setShowColorPicker = setShowColorPicker;

var setViewedMonth = function setViewedMonth(id, viewedMonth) {
  return {
    type: 'SET_VIEWED_MONTH',
    id: id,
    viewedMonth: viewedMonth
  };
};

exports.setViewedMonth = setViewedMonth;

var setViewedYear = function setViewedYear(id, viewedYear) {
  return {
    type: 'SET_VIEWED_YEAR',
    id: id,
    viewedYear: viewedYear
  };
};

exports.setViewedYear = setViewedYear;

var setMode = function setMode(id, mode) {
  return {
    type: 'SET_MODE',
    id: id,
    mode: mode
  };
};

exports.setMode = setMode;

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

var setLastChangedId = function setLastChangedId(lastChangedId) {
  return {
    type: 'SET_LAST_CHANGED_ID',
    lastChangedId: lastChangedId
  };
};

exports.setLastChangedId = setLastChangedId;

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