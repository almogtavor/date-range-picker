"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFirstDayOfWeekIndex = exports.setEndYear = exports.setStartYear = exports.setLanguage = exports.setMode = exports.setViewedYear = exports.setViewedMonth = exports.setShowColorPicker = exports.setMuted = exports.setSelectedColor = void 0;

var setSelectedColor = function setSelectedColor(selectedColor) {
  return {
    type: 'SET_SELECTED_COLOR',
    selectedColor: selectedColor
  };
};

exports.setSelectedColor = setSelectedColor;

var setMuted = function setMuted(muted) {
  return {
    type: 'SET_MUTED',
    muted: muted
  };
};

exports.setMuted = setMuted;

var setShowColorPicker = function setShowColorPicker(showColorPicker) {
  return {
    type: 'SET_SHOW_COLOR_PICKER',
    showColorPicker: showColorPicker
  };
};

exports.setShowColorPicker = setShowColorPicker;

var setViewedMonth = function setViewedMonth(viewedMonth) {
  return {
    type: 'SET_VIEWED_MONTH',
    viewedMonth: viewedMonth
  };
};

exports.setViewedMonth = setViewedMonth;

var setViewedYear = function setViewedYear(viewedYear) {
  return {
    type: 'SET_VIEWED_YEAR',
    viewedYear: viewedYear
  };
};

exports.setViewedYear = setViewedYear;

var setMode = function setMode(mode) {
  return {
    type: 'SET_MODE',
    mode: mode
  };
};

exports.setMode = setMode;

var setLanguage = function setLanguage(language) {
  return {
    type: 'SET_LANGUAGE',
    language: language
  };
};

exports.setLanguage = setLanguage;

var setStartYear = function setStartYear(startYear) {
  return {
    type: 'SET_START_YEAR',
    startYear: startYear
  };
};

exports.setStartYear = setStartYear;

var setEndYear = function setEndYear(endYear) {
  return {
    type: 'SET_END_YEAR',
    endYear: endYear
  };
};

exports.setEndYear = setEndYear;

var setFirstDayOfWeekIndex = function setFirstDayOfWeekIndex(firstDayOfWeekIndex) {
  return {
    type: 'SET_FIRST_DAY_OF_WEEK_INDEX',
    firstDayOfWeekIndex: firstDayOfWeekIndex
  };
};

exports.setFirstDayOfWeekIndex = setFirstDayOfWeekIndex;