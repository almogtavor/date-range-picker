"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _Header = require("../components/Header");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear,
    viewedMonth: state.viewedMonth,
    language: state.language
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.language) {
    dispatch((0, _actions.setLanguage)(ownProps.language));
  }

  return {
    setSelectedColor: function setSelectedColor(selectedColor) {
      return dispatch((0, _actions.setSelectedColor)(selectedColor));
    },
    setViewedMonth: function setViewedMonth(viewedMonth) {
      return dispatch((0, _actions.setViewedMonth)(viewedMonth));
    },
    setViewedYear: function setViewedYear(viewedYear) {
      return dispatch((0, _actions.setViewedYear)(viewedYear));
    },
    setMode: function setMode(mode) {
      return dispatch((0, _actions.setMode)(mode));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header.Header);

exports["default"] = _default;