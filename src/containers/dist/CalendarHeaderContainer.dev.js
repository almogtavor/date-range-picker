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
    selectedColor: state.lowerFooter.selectedColor,
    selectedDays: state.dayElements.selectedDays,
    hoveredDay: state.dayElements.hoveredDay,
    boardsNum: state.general.boardsNum
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSelectedDays: function setSelectedDays(selectedDays) {
      return dispatch((0, _actions.setSelectedDays)(selectedDays));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CalendarHeader.CalendarHeader);

exports["default"] = _default;