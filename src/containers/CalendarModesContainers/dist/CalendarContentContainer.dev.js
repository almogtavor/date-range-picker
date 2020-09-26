"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CalendarContent = require("../../components/CalendarModesComponents/CalendarContent");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    mode: state.calendarModes.mode[ownProps.id]
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(_CalendarContent.CalendarContent);

exports["default"] = _default;