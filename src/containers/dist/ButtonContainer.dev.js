"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _Button = require("../components/Button");

var mapStateToProps = function mapStateToProps(state) {
  return {
    choosenDates: state.datesHeader.choosenDates,
    showCalendar: state.general.showCalendar,
    selectedDays: state.dayElements.selectedDays,
    hoveredDay: state.dayElements.hoveredDay
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setShowCalendar: function setShowCalendar(showCalendar) {
      return dispatch((0, _actions.setShowCalendar)(showCalendar));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Button.Button);

exports["default"] = _default;