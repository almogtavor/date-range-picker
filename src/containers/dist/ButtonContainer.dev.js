"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _Button = require("../components/Button");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(state) {
  return _defineProperty({
    choosenDates: state.choosenDates,
    showCalendar: state.showCalendar
  }, "choosenDates", state.choosenDates);
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