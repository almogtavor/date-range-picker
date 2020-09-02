"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _DateRangePickerMapper = require("../components/DateRangePickerMapper");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    language: ownProps.language,
    startDate: ownProps.startDate,
    endDate: ownProps.endDate,
    firstDayOfWeekIndex: ownProps.firstDayOfWeekIndex,
    boardsNum: ownProps.boardsNum,
    selectedDays: state.selectedDays,
    selectedColor: state.selectedColor,
    hoveredDay: state.hoveredDay,
    showCalendar: state.showCalendar
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.language) {
    dispatch((0, _actions.setLanguage)(ownProps.language));
  }

  if (ownProps.boardsNum) {
    dispatch((0, _actions.setBoardsNum)(ownProps.boardsNum));
  }

  return {
    setChoosenDates: function setChoosenDates(choosenDates) {
      return dispatch((0, _actions.setChoosenDates)(choosenDates));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DateRangePickerMapper.DateRangePickerMapper);

exports["default"] = _default;