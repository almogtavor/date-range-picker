"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _MonthDaysElements = require("../../components/DayElementsComponents/MonthDaysElements");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    viewedYear: state.datesHeader.viewedYear[ownProps.id],
    viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
    id: ownProps.id
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_MonthDaysElements.MonthDaysElements);

exports["default"] = _default;