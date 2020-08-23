"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDisplaySelector = exports.setViewedYear = exports.setViewedMonth = exports.setShowColorPicker = exports.setMuted = exports.setSelectedColor = void 0;

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

var setDisplaySelector = function setDisplaySelector(displaySelector) {
  return {
    type: 'SET_DISPLAY_SELECTOR',
    displaySelector: displaySelector
  };
};

exports.setDisplaySelector = setDisplaySelector;