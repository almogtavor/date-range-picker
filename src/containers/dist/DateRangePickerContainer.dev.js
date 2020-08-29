"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _DateRangePicker = require("../components/DateRangePicker");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    language: ownProps.language,
    startYear: ownProps.startYear,
    endYear: ownProps.endYear,
    firstDayOfWeekIndex: ownProps.firstDayOfWeekIndex,
    boardsNum: ownProps.boardsNum,
    selectedDays: state.selectedDays
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.language) {
    dispatch((0, _actions.setLanguage)(ownProps.language));
  }

  if (ownProps.boardsNum) {
    dispatch((0, _actions.setBoardsNum)(ownProps.boardsNum));
  }

  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DateRangePicker.DateRangePickerMapper);

exports["default"] = _default;