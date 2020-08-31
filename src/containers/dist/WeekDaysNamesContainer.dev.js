"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _WeekDaysNames = require("../components/WeekDaysNames");

var _actions = require("../actions");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    firstDayOfWeekIndex: state.language === "Hebrew" ? 7 - ownProps.firstDayOfWeekIndex : ownProps.firstDayOfWeekIndex,
    language: state.language
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.firstDayOfWeekIndex) {
    dispatch((0, _actions.setFirstDayOfWeekIndex)(ownProps.firstDayOfWeekIndex));
  }

  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_WeekDaysNames.WeekDaysNames);

exports["default"] = _default;