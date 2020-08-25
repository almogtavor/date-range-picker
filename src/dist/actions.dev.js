"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBoardsNum = exports.setFirstDayOfWeekIndex = exports.setEndYear = exports.setStartYear = exports.setLanguage = exports.setSelectedColor = void 0;

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

var setBoardsNum = function setBoardsNum(boardsNum) {
  return {
    type: 'SET_BOARDS_NUM',
    boardsNum: boardsNum
  };
};

exports.setBoardsNum = setBoardsNum;