"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _MonthDaysElements = require("../components/MonthDaysElements");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    viewedYear: state.viewedYear[ownProps.id],
    viewedMonth: state.viewedMonth[ownProps.id],
    id: ownProps.id,
    startDate: state.startDate,
    endDate: state.endDate,
    language: state.language
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_MonthDaysElements.MonthDaysElements);

exports["default"] = _default;