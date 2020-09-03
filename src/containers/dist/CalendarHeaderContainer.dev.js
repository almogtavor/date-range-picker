"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _CalendarHeader = require("../components/CalendarHeader");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedColor: state.selectedColor,
    startDate: state.startDate,
    endDate: state.endDate,
    language: state.language,
    selectedDays: state.selectedDays,
    boardsNum: state.boardsNum
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CalendarHeader.CalendarHeader);

exports["default"] = _default;