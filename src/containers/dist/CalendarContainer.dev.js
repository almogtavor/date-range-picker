"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Calendar = require("../components/Calendar");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    mode: state.mode[ownProps.id],
    language: state.language,
    firstDayOfWeekIndex: state.firstDayOfWeekIndex
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_Calendar.Calendar);

exports["default"] = _default;