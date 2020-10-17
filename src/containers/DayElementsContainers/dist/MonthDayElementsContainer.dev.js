"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _MonthGridElements = require("../../components/DayElementsComponents/MonthGridElements");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    viewedYear: state.datesHeader.viewedYear[ownProps.id],
    viewedMonth: state.datesHeader.viewedMonth[ownProps.id],
    id: ownProps.id
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_MonthGridElements.MonthDaysElements);

exports["default"] = _default;