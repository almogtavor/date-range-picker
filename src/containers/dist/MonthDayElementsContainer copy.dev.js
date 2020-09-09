"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Button = require("../components/Button");

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

var _default = (0, _reactRedux.connect)(mapStateToProps)(_Button.Button);

exports["default"] = _default;