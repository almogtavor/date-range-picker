"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("../actions");

var _Calendar = require("../components/Calendar");

var _reactRedux = require("react-redux");

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedColor: state.selectedColor,
    viewedYear: state.viewedYear,
    viewedMonth: state.viewedMonth,
    mode: state.mode,
    language: state.language,
    startYear: state.startYear,
    endYear: state.endYear,
    firstDayOfWeekIndex: state.firstDayOfWeekIndex
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  if (ownProps.startYear) {
    dispatch((0, _actions.setStartYear)(ownProps.startYear));
  }

  if (ownProps.endYear) {
    dispatch((0, _actions.setEndYear)(ownProps.endYear));
  }

  if (ownProps.firstDayOfWeekIndex) {
    dispatch((0, _actions.setFirstDayOfWeekIndex)(ownProps.firstDayOfWeekIndex));
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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Calendar.Calendar);

exports["default"] = _default;